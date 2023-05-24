import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="experience-container" id="experience">
      <h2>{t("experience.title")}</h2>
      <hr />
      <div className="work-education-container">
        <div className="work-card-experience">
          <div className="work-title">
            <FontAwesomeIcon icon={faBriefcase} />
            <h3>{t("work.title")}</h3>
          </div>
          <div className="exp-cont">
            <div className="timeline">
              <div className="timeline-line"></div>
            </div>
            <div className="first-experience">
              <h4>Altimetrik Uruguay</h4>
              <ul>
                <li>
                  <span>{t("altimetrik.software")}</span>
                  <span>{t("altimetrik.second")}</span>
                  <p>{t("altimetrik.description.second")}</p>
                </li>
                <li>
                  <span>{t("altimetrik.intern")}</span>
                  <span>{t("altimetrik.first")}</span>
                  <p>{t("altimetrik.description.first")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="education-card-experience">
          <div className="education-title">
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3>{t("education.title")}</h3>
          </div>
          <div className="educ-cont">
            <div className="timeline-line-2"></div>
            <div className="education">
              <div className="second-ed">
                <h4>Digital House</h4>
                <ul>
                  <li>
                    <span>Certified tech developer</span>
                    <span>{t("digital.time")}</span>
                    <p>{t("digital.description")}</p>
                  </li>
                </ul>
              </div>
              <div className="first-ed">
                <h4>Argentina programa</h4>
                <ul>
                  <li>
                    <span>Sé programar</span>
                    <span>{t("arg.time")}</span>
                    <p>{t("arg.description")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
