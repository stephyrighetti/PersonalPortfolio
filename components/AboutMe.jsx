import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutMe = ({ aboutMeRef, switched }) => {
  const { t } = useTranslation();

  return (
    <section ref={aboutMeRef} className="about-me-container" id="about-me">
      <h2 className="about-me-title">{t("about.me.title")}</h2>
      <hr />
      <div className="profile-container">
        <div className="profile-img-me">
          <Image
            src="/profile.jpg"
            width={400}
            height={400}
            alt="Stephanie's profile picture"
          />
        </div>
        <div className="bio-container">
          <p className="bio-description">{t("bio.description.first")}</p>
          <p className="bio-description">{t("bio.description.second")}</p>
          <div className="button-container">
            <a
              href={t("cv.download")}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button">
              {t("button.cv")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
