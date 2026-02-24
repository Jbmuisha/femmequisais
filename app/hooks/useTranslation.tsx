
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
    },

    privacy: {
      title: "Politique de confidentialité",
      subtitle: "Protection et respect de vos données personnelles",
      introduction: "1. Introduction",
      introText:
        "Le club de lecture La Femme qui sait est un espace de croissance, de réflexion et de transformation dédié aux femmes qui choisissent consciemment d’évoluer. Nous accordons une importance particulière à la protection de vos données personnelles.",
      dataCollection: "2. Données collectées",
      dataCollectionText:
        "Nous collectons les informations que vous fournissez volontairement : nom, email, téléphone, ville et motivation. Ces données servent uniquement à la gestion du club.",
      dataUsage: "3. Utilisation des données",
      dataUsageText:
        "Vos données sont utilisées pour gérer votre inscription, vous informer des activités et faciliter la communication au sein de la communauté. Nous ne vendons jamais vos données.",
      dataProtection: "4. Protection des données",
      dataProtectionText:
        "Nous mettons en place des mesures raisonnables pour protéger vos informations contre tout accès non autorisé.",
      yourRights: "5. Vos droits",
      yourRightsText:
        "Vous pouvez demander l’accès, la modification ou la suppression de vos données à tout moment.",
      contact: "6. Contact",
      contactText:
        "Pour toute question concernant vos données personnelles, contactez-nous à :",
      email: "Email"
    },

    terms: {
      title: "Termes et Conditions",
      subtitle: "Conditions d’utilisation du club",
      introduction: "1. Présentation",
      introText:
        "La Femme qui sait est un club de lecture dédié aux femmes souhaitant évoluer intellectuellement, émotionnellement et spirituellement à travers la lecture et le partage.",
      acceptance: "2. Engagement des membres",
      acceptanceText:
        "Chaque membre s’engage à respecter les autres, maintenir un climat bienveillant et ne pas publier de contenu offensant. Le club peut retirer l’accès en cas de non-respect.",
      changes: "3. Modifications",
      changesText:
        "Le club peut modifier les présentes conditions afin de préserver sa vision et ses valeurs.",
      contact: "4. Contact",
      contactText:
        "Pour toute question concernant les conditions d’utilisation, contactez-nous à :",
      email: "Email"
    }
  },

  en: {
    header: {
      title: "LA FEMME QUI SAIT",
      join: "Register"
    },

    footer: {
      trust: "Trust and compliance",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      social: "Social Networks",
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
    },

    privacy: {
      title: "Privacy Policy",
      subtitle: "Protection and respect of your personal data",
      introduction: "1. Introduction",
      introText:
        "La Femme qui sait is a reading club dedicated to women who consciously choose to grow. We value the protection of your personal information.",
      dataCollection: "2. Data Collection",
      dataCollectionText:
        "We collect information you voluntarily provide: name, email, phone, city, and motivation. This data is used solely for club management.",
      dataUsage: "3. Data Usage",
      dataUsageText:
        "Your data is used to manage your registration, inform you about activities, and facilitate communication within the community. We never sell your data.",
      dataProtection: "4. Data Protection",
      dataProtectionText:
        "We implement reasonable measures to protect your information from unauthorized access.",
      yourRights: "5. Your Rights",
      yourRightsText:
        "You may request access, modification, or deletion of your data at any time.",
      contact: "6. Contact",
      contactText:
        "For any questions regarding your personal data, contact us at:",
      email: "Email"
    },

    terms: {
      title: "Terms and Conditions",
      subtitle: "Conditions of use of the club",
      introduction: "1. Introduction",
      introText:
        "La Femme qui sait is a reading club dedicated to women seeking intellectual, emotional, and spiritual growth through reading and sharing.",
      acceptance: "2. Member Commitment",
      acceptanceText:
        "Members agree to respect others, maintain a positive environment, and avoid inappropriate content. Access may be revoked if values are not respected.",
      changes: "3. Modifications",
      changesText:
        "The club may update these terms to preserve its vision and values.",
      contact: "4. Contact",
      contactText:
        "For any questions regarding the terms of use, contact us at:",
      email: "Email"
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