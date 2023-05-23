import { useTranslation } from 'react-i18next';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageSwitch = () => {
      const newLanguage = i18n.language === 'en' ? 'es' : 'en';
      i18n.changeLanguage(newLanguage) 
    }

    return (
      <div className="lang-container">
        <button onClick={handleLanguageSwitch} className={i18n.language === 'en' ? 'en-button' : 'es-button'} tabIndex={0}>
            <FontAwesomeIcon icon={faGlobe}/>
            {i18n.language === 'en' ? 'ES' : 'EN'}
        </button>
    </div>
      );

}

export default LanguageSwitcher