import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    to: process.env.EMAIL_USER,
    subject: "Nouvelle inscription - LA FEMME QUI SAIT",
    text: `
Nom: ${name}
Email: ${email}
Téléphone: ${phone}
Ville: ${city}
Motivation: ${motivation}
`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email envoyé !" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Erreur lors de l’envoi de l’email" }, { status: 500 });
  }
}