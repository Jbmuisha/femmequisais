import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";


async function sendToGoogleAppsScript(data: { name: string; email: string; phone: string; city: string; motivation: string }) {
  try {
 
    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzJRWF0ZdVJwDuCnMRHvew7X9-5gKHuBWTOZHVxgGbVRHpg-QIl9LLfQm_bnXKzf90O/exec';
    
  
    const formData = new URLSearchParams();
    formData.append('user_name', data.name);
    formData.append('user_email', data.email);
    formData.append('user_phone', data.phone);
    formData.append('user_city', data.city);
    formData.append('user_motivation', data.motivation);
    
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData
    });
    
    if (response.ok) {
      console.log('Données envoyées à Google Apps Script avec succès');
      return true;
    } else {
      console.error('Erreur lors de l\'envoi à Google Apps Script:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Erreur Google Apps Script:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, phone, city, motivation } = data;


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "lafemmequisait@gmail.com",
    subject: "Nouvelle inscription - LA FEMME QUI SAIT",
    text: `
Nouvelle inscription reçue !

Informations du participant :
Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Ville: ${city}
Motivation: ${motivation}

Date: ${new Date().toLocaleString('fr-FR')}
`,
  };

  try {
   
    const [emailResult, appsScriptResult] = await Promise.all([
      transporter.sendMail(mailOptions),
      sendToGoogleAppsScript({ name, email, phone, city, motivation })
    ]);

    return NextResponse.json({ 
      message: "Inscription réussie ! Email envoyé et données enregistrées dans Google Sheets via Apps Script." 
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Erreur lors de l’enregistrement" }, { status: 500 });
  }
}
