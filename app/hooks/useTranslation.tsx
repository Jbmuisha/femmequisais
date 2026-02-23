
"use client";

import React, { useState, useEffect } from 'react';


const translations = {
  fr: {
    header: {
      title: "LA FEMME QUI SAIT",
      join: "S’inscrire"
    },
    footer: {
      trust: "Confiance et conformité",
      terms: "Termes et conditions",
      privacy: "Confidentialité",
      cookies: "Cookies",
      social: "Réseaux sociaux",
      copyright: "© 2026 LA FEMME QUI SAIT"
    },
    join: {
      title: "Inscription au club",
      subtitle: "Rejoignez notre communauté de lecteurs passionnés",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone / WhatsApp",
      city: "Ville",
      motivation: "Pourquoi veux-tu rejoindre ?",
      submit: "S’inscrire",
      success: "Inscription réussie ! Merci 🙏",
      error: "Erreur, réessaie plus tard",
      networkError: "Erreur réseau, réessaie plus tard",
      sending: "Envoi en cours..."
    }
  },
  en: {
    header: {
      title: "LA FEMME QUI SAIT",
      join: "Register"
    },
    footer: {
      trust: "Trust and compliance",
      terms: "Terms and conditions",
      privacy: "Privacy",
      cookies: "Cookies",
      social: "Social networks",
      copyright: "© 2026 LA FEMME QUI SAIT"
    },
    join: {
      title: "Club Registration",
      subtitle: "Join our community of passionate readers",
      name: "Full name",
      email: "Email",
      phone: "Phone / WhatsApp",
      city: "City",
      motivation: "Why do you want to join?",
      submit: "Sign up",
      success: "Registration successful! Thank you 🙏",
      error: "Error, try again later",
      networkError: "Network error, try again later",
      sending: "Sending..."
    }
  }
};

// Fonction pour obtenir la traduction
const t = (key: string, lang: string) => {
  const keys = key.split('.');
  let result: any = translations[lang as keyof typeof translations];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key; // Retourne la clé si la traduction n'est pas trouvée
    }
  }
  
  return result;
};

// Hook de traduction
export const useTranslation = () => {
  const [language, setLanguage] = useState("fr");
  
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "fr" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);
  
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };
  
  return {
    language,
    t: (key: string) => t(key, language),
    changeLanguage
  };
};

// Composant de sélecteur de langue
export const LanguageSelector = ({ onLanguageChange }: { onLanguageChange?: (lang: string) => void }) => {
  const { language, changeLanguage } = useTranslation();
  
  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
    // Rafraîchir la page pour appliquer la nouvelle langue
    window.location.reload();
  };

  return (
    <div className="lang-select">
      <svg className="lang-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" fill="#593122"/>
        <path d="M12 6v6l4 2" stroke="#593122" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <select 
        value={language.toUpperCase()} 
        onChange={(e) => handleLanguageChange(e.target.value.toLowerCase())}
      >
        <option value="FR">FR</option>
        <option value="EN">EN</option>
      </select>
    </div>
  );
};