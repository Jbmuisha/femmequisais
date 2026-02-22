"use client";

import { useState } from "react";
import { FaShareAlt, FaUsers, FaStar } from "react-icons/fa"; // icônes
import Link from 'next/link';
import "./HomePage.css";

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [motivation, setMotivation] = useState("");
  const [status, setStatus] = useState("");

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

  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Rejoignez notre club de lecture</h1>
          <p>Découvrez, partagez et discutez vos livres préférés avec une communauté passionnée.</p>
          <Link href="/join-list" className="btn-primary">S’inscrire maintenant</Link>
        </div>
        <div className="hero-img">
          <img src="/images/image.jpeg" alt="Lecture Club" />
        </div>
      </section>

      {/* Avantages Section améliorée */}
      <section className="advantages">
        <div className="card">
          <div className="icon"><FaShareAlt /></div>
          <h3>Partage facile</h3>
          <p>Discutez de vos lectures et échangez des avis avec d'autres passionnés.</p>
        </div>
        <div className="card">
          <div className="icon"><FaUsers /></div>
          <h3>Événements exclusifs</h3>
          <p>Participez à des rencontres en ligne et en personne avec des auteurs et lecteurs.</p>
        </div>
        <div className="card">
          <div className="icon"><FaStar /></div>
          <h3>Recommandations personnalisées</h3>
          <p>Recevez des suggestions de lecture basées sur vos préférences.</p>
        </div>
      </section>

    

      {/* Call-to-action Section */}
        <section className="cta">
        <h2>Prêt à rejoindre notre communauté ?</h2>
        <p>Inscrivez-vous maintenant et soyez parmi les premiers à profiter du club !</p>
        <Link href="/join-list" className="btn-primary">S’inscrire</Link>
      </section>

    </div>
  );
}