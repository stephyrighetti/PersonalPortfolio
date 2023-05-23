import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faNodeJs, faReact, faJsSquare, faAngular, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";

const Skills = () => {
  const { t } = useTranslation();
 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">{t('skills.title')}</h2>
      <hr />
      {isMobile ? (
        <div className="column-container">
          <div>
            <ul className="tools">
              <li>
                <FontAwesomeIcon icon={faHtml5} />
                HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} />
                CSS3
              </li>
              <li>
                <FontAwesomeIcon icon={faJsSquare} />
                JavaScript
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} />
                React
              </li>
              <li>
                <FontAwesomeIcon icon={faAngular} />
                Angular
              </li>
              <li>
                <Image src="/nextjs.svg" width={28} height={28} alt="Next.js icon" className="svg-logo" />
                Next.js
              </li>
            </ul>
          </div>
          <div>
            <ul className="tools">
              <li>
                <Image src="/typescript.svg" width={28} height={28} alt="TypeScript icon" className="svg-logo" />
                TypeScript
              </li>
              <li>
                <FontAwesomeIcon icon={faNodeJs} />
                Node.js
              </li>
              <li>
                <Image src="/expressjs.svg" width={28} height={28} alt="Express.js icon" className="svg-logo" />
                Express
              </li>
              <li>
                <Image src="/mysql.svg" width={28} height={28} alt="Next.js icon" className="svg-logo" />
                MySQL
              </li>
              <li>
                <FontAwesomeIcon icon={faGitAlt} />
                Git
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <ul className="tools">
          <li>
            <FontAwesomeIcon icon={faHtml5} />
            HTML5
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3} />
            CSS3
          </li>
          <li>
            <FontAwesomeIcon icon={faJsSquare} />
            JavaScript
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} />
            React
          </li>
          <li>
            <FontAwesomeIcon icon={faAngular} />
            Angular
          </li>
          <li>
            <Image src="/nextjs.svg" width={28} height={28} alt="Next.js icon" className="svg-logo" />
            Next.js
          </li>
          <li>
            <Image src="/typescript.svg" width={28} height={28} alt="TypeScript icon" className="svg-logo" />
            TypeScript
          </li>
          <li>
            <FontAwesomeIcon icon={faNodeJs} />
            Node.js
          </li>
          <li>
            <Image src="/expressjs.svg" width={28} height={28} alt="Express.js icon" className="svg-logo" />
            Express
          </li>
          <li>
            <Image src="/mysql.svg" width={28} height={28} alt="Next.js icon" className="svg-logo" />
            MySQL
          </li>
          <li>
            <FontAwesomeIcon icon={faGitAlt} />
            Git
          </li>
        </ul>
      )}
      <p>{t("coming.soon")}</p>
    </section>
  );
};

export default Skills;

