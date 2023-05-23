import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <Image src='/suit-girl.png' className="profile-img" width={400} height={400} alt="Stephanie's photo" />
      <div className="hero-text">
        <div className="hero-text-name-container">
          <p>{t('hero.text')}</p>
          <h2 className="hero-text-name">Stephanie👋</h2>
        </div>
        <p className="first-sentence">
        {t('hero.about.first')}</p>
        <p className="second-sentence">{t('hero.about.second')}</p>
      </div>
      <div className="social-icons-about">
            <a
              href="https://github.com/stephyrighetti"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a
              href="https://www.linkedin.com/in/stephanie-righetti-5a1b2a15b/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </div>
    </div>
  )
}

export default Hero;