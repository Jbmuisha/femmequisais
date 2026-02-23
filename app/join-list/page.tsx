"use client";

import { useState } from "react";
import { useTranslation } from '../hooks/useTranslation';
import "../globals.css";

export default function JoinListPage() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [motivation, setMotivation] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t('join.sending'));

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, city, motivation }),
      });

      if (res.ok) {
        setStatus(t('join.success'));
        setName(""); setEmail(""); setPhone(""); setCity(""); setMotivation("");
      } else {
        setStatus(t('join.error'));
      }
    } catch {
      setStatus(t('join.networkError'));
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center my-10">{t('join.title')}</h1>
      <section className="form-section">
        <form onSubmit={handleSubmit}>
          <input placeholder={t('join.name')} value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder={t('join.email')} value={email} onChange={e => setEmail(e.target.value)} required />
          <input placeholder={t('join.phone')} value={phone} onChange={e => setPhone(e.target.value)} />
          <input placeholder={t('join.city')} value={city} onChange={e => setCity(e.target.value)} />
          <textarea placeholder={t('join.motivation')} value={motivation} onChange={e => setMotivation(e.target.value)} />
          <button type="submit" className="btn-primary">{t('join.submit')}</button>
        </form>
        {status && <p className="status">{status}</p>}
      </section>
    </div>
  );
}