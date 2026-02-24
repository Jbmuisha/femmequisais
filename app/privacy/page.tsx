"use client";
import { useTranslation } from "../hooks/useTranslation";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>{t("privacy.title")}</h1>
        <p>{t("privacy.subtitle")}</p>
        <div className="legal-divider" />
      </div>

      <div className="legal-card">
        <h2>{t("privacy.introduction")}</h2>
        <p>{t("privacy.introText")}</p>
      </div>

      <div className="legal-card">
        <h2>{t("privacy.dataCollection")}</h2>
        <p>{t("privacy.dataCollectionText")}</p>
      </div>

      <div className="legal-card">
        <h2>{t("privacy.dataUsage")}</h2>
        <p>{t("privacy.dataUsageText")}</p>
      </div>

      <div className="legal-card">
        <h2>{t("privacy.dataProtection")}</h2>
        <p>{t("privacy.dataProtectionText")}</p>
      </div>

      <div className="legal-card">
        <h2>{t("privacy.yourRights")}</h2>
        <p>{t("privacy.yourRightsText")}</p>
      </div>

      <div className="legal-card">
        <h2>{t("privacy.contact")}</h2>
        <p>{t("privacy.contactText")}</p>

        <div className="contact-box">
          <strong>{t("privacy.email")}:</strong>{" "}
          lafemmequisait@gmail.com
        </div>
      </div>
    </div>
  );
}