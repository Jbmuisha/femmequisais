"use client";

import { useState } from "react";
import "../globals.css";

export default function JoinListPage() {
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
      <h1 className="text-3xl font-bold text-center my-10">Inscription au club</h1>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <input placeholder="Nom complet" value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input placeholder="Téléphone / WhatsApp" value={phone} onChange={e => setPhone(e.target.value)} />
          <input placeholder="Ville" value={city} onChange={e => setCity(e.target.value)} />
          <textarea placeholder="Pourquoi veux-tu rejoindre ?" value={motivation} onChange={e => setMotivation(e.target.value)} />
          <button type="submit" className="btn-primary">S’inscrire</button>
        </form>
        {status && <p className="status">{status}</p>}
      </section>
    </div>
  );
}