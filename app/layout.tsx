// app/layout.tsx
"use client";
import './globals.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { LanguageSelector, useTranslation } from './hooks/useTranslation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <html lang="fr">
      
      <head>
        {/* Meta tags SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="LA FEMME QUI SAIT - Communauté de lecteurs passionnés, partage de connaissances et d'expériences" />
        <meta name="keywords" content="lecture, communauté, savoir, culture, éducation, femmes, apprentissage" />
        <meta name="author" content="LA FEMME QUI SAIT" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lafemmequisait.com/" />
        <meta property="og:title" content="LA FEMME QUI SAIT" />
        <meta property="og:description" content="Communauté de lecteurs passionnés, partage de connaissances et d'expériences" />
        <meta property="og:image" content="/images/femmequisait.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lafemmequisait.com/" />
        <meta property="twitter:title" content="LA FEMME QUI SAIT" />
        <meta property="twitter:description" content="Communauté de lecteurs passionnés, partage de connaissances et d'expériences" />
        <meta property="twitter:image" content="/images/femmequisait.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/femmequisait.png" />
        <link rel="apple-touch-icon" href="/images/femmequisait.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://lafemmequisait.com/" />
        
        <style>
          {`
            @media (max-width: 500px) {
              .footer .container {
                flex-direction: column;
                align-items: center;
                text-align: center;
              }
            }
          `}
        </style>
      </head>
      <body>
        <header className="header">
          <div className="logo">
            <img src="/images/femmequisait.png" alt="Logo" />
            <span>{t('header.title')}</span>
          </div>

          <div className="header-actions">
            <LanguageSelector />
            
            <Link href="/join-list">
              <button className="join-btn">{t('header.join')}</button>
            </Link>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="footer" style={{ background: '#f3f4f6', padding: '2rem 1rem' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
            
            {/* Confiance et conformité */}
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#555', textTransform: 'uppercase' }}>
                {t('footer.trust')}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>
                  <Link href="/terms" style={{ color: '#593122', textDecoration: 'none' }}>
                    {t('footer.terms')}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" style={{ color: '#593122', textDecoration: 'none' }}>
                    {t('footer.privacy')}
                  </Link>
                </li>
               
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#555', textTransform: 'uppercase' }}>Contact</h3>
              <p style={{ color: '#593122', marginBottom: '0.5rem' }}>
                <a href="mailto:lafemmequisait@gmail.com" style={{ color: '#593122', textDecoration: 'none' }}>
                  lafemmequisait@gmail.com
                </a>
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#555', textTransform: 'uppercase' }}>{t('footer.social')}</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://instagram.com/la_femme_qui_sait" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} color="#C13584" /></a>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', color: '#593122', fontWeight: 500 }}>
            {t('footer.copyright')}
          </p>
        </footer>
      </body>
    </html>
  );
}