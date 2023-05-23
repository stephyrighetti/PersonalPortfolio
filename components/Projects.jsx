import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {

    const { t } = useTranslation();


    return (
        <section className="projects-container" id="projects">
            <h2>{t("projects.title")}</h2>
            <hr />
            <div className="projects-elem">
                <div className="project">
                    <Image className="game-finder-img" src="/game-finder-main.png" width={450} height={300} alt="Game finder project image"/>
                    <div className="project-info">
                        <h3>{t("game.finder")}</h3>
                        <p>{t("game.finder.des")}</p>
                        <ul className="tools-used">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Sweet alert</li>
                            <li>JSON server</li>
                        </ul>
                        <a aria-label="GitHub project"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/stephyrighetti/AltimetrikGameFinderApp"
                        className="github-project-link"
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <Image src= "/adventure.png" width={430} height={200} alt="Choose your own adventure project image" className="adventure-img"/>
                    <div className="project-info">
                        <h3>{t("adventure.title")}</h3>
                        <p>{t("adventure.des")}</p>
                        <ul className="tools-used">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                        </ul>
                        <a aria-label="GitHub project"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/stephyrighetti/EligeTuPropiaAventura"
                        className="github-project-link"
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>
                <div className="project">
                    <Image className="digital-booking-img" src="/digital-booking.jpg" width={400} height={250} alt="Digital booking project image"/>
                    <div className="project-info">
                        <h3>Digital booking</h3>
                        <p>{t("digital.booking.des")}</p>
                        <ul className="tools-used">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Java</li>
                            <li>Spring boot</li>
                            <li>MySQL</li>
                            <li>AWS</li>
                            <li>Terraform</li>
                        </ul>
                        <a aria-label="GitHub project"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.github.com/stephyrighetti/DigitalBooking"
                        className="github-project-link"
                        >
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects