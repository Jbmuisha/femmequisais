"use client";

import React, { useState, useEffect } from "react";
import { FaShareAlt, FaUsers, FaStar } from "react-icons/fa"; 
import Link from 'next/link';
import "./globals.css";


const AnimatedNumber = ({ 
  value, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  className = "" 
}: { 
  value: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
  className?: string; 
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
 
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);
      const current = Math.floor(value * easeOutQuad);
      
      setDisplayValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

// Hook pour détecter le scroll et déclencher les animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};


const translations = {
  fr: {
    hero: {
      title: "Rejoignez notre club de lecture",
      subtitle: "Découvrez, partagez et discutez vos livres préférés avec une communauté passionnée.",
      cta: "S’inscrire maintenant"
    },
    advantages: {
      share: {
        title: "Partage facile",
        description: "Discutez de vos lectures et échangez des avis avec d'autres passionnés."
      },
      events: {
        title: "Événements exclusifs",
        description: "Participez à des rencontres en ligne et en personne avec des auteurs et lecteurs."
      },
      recommendations: {
        title: "Recommandations personnalisées",
        description: "Recevez des suggestions de lecture basées sur vos préférences."
      }
    },
    vision: {
      title: "Notre Vision",
      paragraph1: "Le club de lecture <strong>La Femme qui sait</strong> est un espace de croissance, de réflexion et de transformation dédié aux femmes qui choisissent consciemment d’évoluer.",
      paragraph2: "La Femme qui sait, c’est celle qui apprend, qui grandit et qui ose se remettre en question. Elle refuse de rester dans l’ignorance. Elle élève son intelligence émotionnelle, spirituelle et intellectuelle afin de devenir une meilleure version d’elle-même.",
      paragraph3: "À travers la lecture, les échanges et le partage d’expériences, ce club accompagne chaque femme à mieux se comprendre, à affermir son identité et à élargir sa vision.",
      paragraph4: "Ici, nous lisons pour comprendre, nous comprenons pour évoluer, et nous évoluons pour impacter positivement notre vie, notre entourage et notre génération.",
      paragraph5: "Parce qu’une femme qui sait ne se perd pas : elle discerne, elle choisit avec sagesse, agit avec intention et marche avec assurance vers sa destinée.",
      toggle: {
        showMore: "Voir plus",
        showLess: "Voir moins"
      }
    },
    cta: {
      title: "Prêt à rejoindre notre communauté ?",
      subtitle: "Inscrivez-vous maintenant et soyez parmi les premiers à profiter du club !",
      button: "S’inscrire"
    },
    form: {
      title: "Inscription au club",
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
    hero: {
      title: "Join our reading club",
      subtitle: "Discover, share and discuss your favorite books with a passionate community.",
      cta: "Register  now"
    },
    advantages: {
      share: {
        title: "Easy sharing",
        description: "Discuss your readings and exchange opinions with other passionate readers."
      },
      events: {
        title: "Exclusive events",
        description: "Participate in online and in-person meetings with authors and readers."
      },
      recommendations: {
        title: "Personalized recommendations",
        description: "Receive reading suggestions based on your preferences."
      }
    },
    vision: {
      title: "Our Vision",
      paragraph1: "The <strong>La Femme qui sait</strong> reading club is a space for growth, reflection and transformation dedicated to women who consciously choose to evolve.",
      paragraph2: "The Woman who knows is the one who learns, grows and dares to question herself. She refuses to remain in ignorance. She elevates her emotional, spiritual and intellectual intelligence to become a better version of herself.",
      paragraph3: "Through reading, exchanges and sharing experiences, this club accompanies each woman to better understand herself, strengthen her identity and broaden her vision.",
      paragraph4: "Here, we read to understand, we understand to evolve, and we evolve to positively impact our lives, our surroundings and our generation.",
      paragraph5: "Because a woman who knows does not get lost: she discerns, she chooses wisely, she acts with intention and walks with confidence towards her destiny.",
      toggle: {
        showMore: "Show more",
        showLess: "Show less"
      }
    },
    cta: {
      title: "Ready to join our community?",
      subtitle: "Register now and be among the first to enjoy the club!",
      button: "Sign up"
    },
    form: {
      title: "Club Registration",
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


const t = (key: string, lang: string) => {
  const keys = key.split('.');
  let result: any = translations[lang as keyof typeof translations];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key; 
    }
  }
  
  return result;
};

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [motivation, setMotivation] = useState("");
  const [status, setStatus] = useState("");
  const [showFullVision, setShowFullVision] = useState(false);
  const [language, setLanguage] = useState("fr");
  
 
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "fr" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);
  

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, city, motivation }),
      });

      if (res.ok) {
        setStatus("Inscription réussie ! Merci 🙏");
        setName(""); setEmail(""); setPhone(""); setCity(""); setMotivation("");
      } else {
        setStatus("Erreur, réessaie plus tard");
      }
    } catch {
      setStatus("Erreur réseau, réessaie plus tard");
    }
  };


  const heroRef = useScrollAnimation();
  const advantagesRef = useScrollAnimation();
  const visionRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="container">

      
      <section className="hero" ref={heroRef.ref}>
        <div className={`hero-text ${heroRef.isVisible ? 'fade-down' : ''}`}>
          <h1 dangerouslySetInnerHTML={{ __html: t('hero.title', language) }} />
          <p>{t('hero.subtitle', language)}</p>
          <Link href="/join-list" className="btn-primary">{t('hero.cta', language)}</Link>
        </div>
        <div className={`hero-img ${heroRef.isVisible ? 'fade-up' : ''}`}>
          <img src="/images/image.jpeg" alt="Lecture Club" />
        </div>
      </section>

      

     
      <section className="advantages" ref={advantagesRef.ref}>
        <div className={`card ${advantagesRef.isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          <div className="icon"><FaShareAlt /></div>
          <h3>{t('advantages.share.title', language)}</h3>
          <p>{t('advantages.share.description', language)}</p>
        </div>
        <div className={`card ${advantagesRef.isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          <div className="icon"><FaUsers /></div>
          <h3>{t('advantages.events.title', language)}</h3>
          <p>{t('advantages.events.description', language)}</p>
        </div>
        <div className={`card ${advantagesRef.isVisible ? 'fade-up' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="icon"><FaStar /></div>
          <h3>{t('advantages.recommendations.title', language)}</h3>
          <p>{t('advantages.recommendations.description', language)}</p>
        </div>
      </section>
      
      
      <section className="vision" ref={visionRef.ref}>
        <div className={`vision-img ${visionRef.isVisible ? 'fade-right' : ''}`}>
          <img src="/images/1.jpeg" alt="Vision du club La Femme qui sait" />
        </div>
        <div className={`vision-text ${visionRef.isVisible ? 'fade-left' : ''}`}>
          <h2>{t('vision.title', language)}</h2>
          
       
          <p dangerouslySetInnerHTML={{ __html: t('vision.paragraph1', language) }} />
          <p dangerouslySetInnerHTML={{ __html: t('vision.paragraph2', language) }} />
          
       
          {showFullVision && (
            <div className="vision-expanded">
              <p dangerouslySetInnerHTML={{ __html: t('vision.paragraph3', language) }} />
              <p dangerouslySetInnerHTML={{ __html: t('vision.paragraph4', language) }} />
              <p dangerouslySetInnerHTML={{ __html: t('vision.paragraph5', language) }} />
            </div>
          )}
          
        
          <button 
            className="btn-toggle"
            onClick={() => setShowFullVision(!showFullVision)}
          >
            {showFullVision ? t('vision.toggle.showLess', language) : t('vision.toggle.showMore', language)}
          </button>
        </div>
      </section>

      <section className="cta" ref={ctaRef.ref}>
        <div className={`cta-content ${ctaRef.isVisible ? 'fade-up' : ''}`}>
          <h2>{t('cta.title', language)}</h2>
          <p>{t('cta.subtitle', language)}</p>
          <Link href="/join-list" className="btn-primary">{t('cta.button', language)}</Link>
        </div>
      </section>

    </div>
  );
}