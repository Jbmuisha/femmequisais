"use client";
import { useTranslation } from "../hooks/useTranslation";

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>{t("terms.title")}</h1>
        <p>{t("terms.subtitle")}</p>
        <div className="legal-divider" />
      </div>

      <div className="legal-card">
        <h2>{t("terms.introduction")}</h2>
        <p>{t("terms.introText")}</p>
      </div>

      <div className="legal-card">
        <h2>{t("terms.acceptance")}</h2>
        <p>{t("terms.acceptanceText")}</p>
      </div>

      <div className="legal-card">
        <h2>{t("terms.changes")}</h2>
        <p>{t("terms.changesText")}</p>
      </div>

      <div className="legal-card">
        <h2>{t("terms.contact")}</h2>
        <p>{t("terms.contactText")}</p>

        <div className="contact-box">
          <strong>{t("terms.email")}:</strong>{" "}
          lafemmequisait@gmail.com
        </div>
      </div>
    </div>
  );
}