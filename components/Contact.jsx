import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-me-title">{t("contact.title")}</h2>
      <hr />
      <div className="info-container">
        <div className="email-contact">
          <h3>Email</h3>
          <div className="email-adress">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>steefirighetti@gmail.com</p>
            <a href="mailto:steefirighetti@gmail.com">
              <Image
                src="/link.svg"
                width={14}
                height={14}
                className="link-to-email"
                alt="Link to email adress"
              />
            </a>
          </div>
        </div>
        <div className="social-media-contact">
          <h3>{t("social.media")}</h3>
          <div className="social-icons-about-pink">
            <a
              href="https://github.com/stephyrighetti"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/stephanie-righetti-5a1b2a15b/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
