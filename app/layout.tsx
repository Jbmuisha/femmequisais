// app/layout.tsx
import './HomePage.css';
import Link from 'next/link';
import { FaGlobe, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
          <div className="logo">
            <img src="/images/femmequisait.png" alt="Logo" />
            <span>LA FEMME QUI SAIT</span>
          </div>

          <div className="header-actions">
            <div className="lang-select">
              <FaGlobe className="lang-icon" />
              <select defaultValue="FR">
                <option value="FR">FR</option>
                <option value="EN">EN</option>
              </select>
            </div>

            <Link href="/join-list">
              <button className="join-btn">S’inscrire</button>
            </Link>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="footer" style={{ background: '#f3f4f6', padding: '2rem 1rem' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
            
            {/* Confiance et conformité */}
           {/* Confiance et conformité */}
<div>
  <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#555', textTransform: 'uppercase' }}>
    Confiance et conformité
  </h3>
  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <li>
      <Link href="#" style={{ color: '#593122', textDecoration: 'none' }}>
        Termes et conditions
      </Link>
    </li>
    <li>
      <Link href="#" style={{ color: '#593122', textDecoration: 'none' }}>
        Confidentialité
      </Link>
    </li>
    <li>
      <Link href="#" style={{ color: '#593122', textDecoration: 'none' }}>
        Cookies
      </Link>
    </li>
  </ul>
</div>

            {/* Réseaux sociaux */}
            <div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '1rem', color: '#555', textTransform: 'uppercase' }}>Réseaux sociaux</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://www.facebook.com/tonpage" target="_blank" rel="noopener noreferrer"><FaFacebookF size={28} color="#1877F2" /></a>
                <a href="https://www.instagram.com/tonprofil" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} color="#C13584" /></a>
                <a href="https://www.youtube.com/tonchaine" target="_blank" rel="noopener noreferrer"><FaYoutube size={28} color="#FF0000" /></a>
                <a href="https://twitter.com/tonprofil" target="_blank" rel="noopener noreferrer"><FaTwitter size={28} color="#1DA1F2" /></a>
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', color: '#593122', fontWeight: 500 }}>
            &copy; 2026 LA FEMME QUI SAIT
          </p>
        </footer>
      </body>
    </html>
  );
}