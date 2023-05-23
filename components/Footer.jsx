import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    
    const { t } = useTranslation();

    return (
    <footer>
        <FontAwesomeIcon icon={faCrow}/>
        <h5>{t("footer.text")} | © {new Date().getFullYear()} </h5>
    </footer>
    )
}

export default Footer