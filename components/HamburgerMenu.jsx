import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HamburgerMenu = ({ showMenu, setShowMenu, setShowIcon }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 480px)").matches;
      setShowIcon(isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`hamburger-menu${showMenu ? " open" : ""}`}>
      <FontAwesomeIcon
        className="cross-icon"
        onClick={handleClose}
        icon={faXmark}
      />
      <nav className="nav-hamburger-menu">
        <ul className="nav-links-ham">
          <ScrollLink
            onClick={handleClose}
            to="about-me"
            smooth={true}
            duration={500}
            className="link-line"
            tabIndex={0}>
            <p>01.</p>
            <li>{t("header.about")}</li>
          </ScrollLink>
          <ScrollLink
            onClick={handleClose}
            to="skills"
            smooth={true}
            duration={500}
            className="link-line"
            tabIndex={0}>
            <p>02.</p>
            <li>{t("header.skills")}</li>
          </ScrollLink>
          <ScrollLink
            onClick={handleClose}
            to="experience"
            smooth={true}
            duration={500}
            className="link-line"
            tabIndex={0}>
            <p>03.</p>
            <li>{t("header.experience")}</li>
          </ScrollLink>
          <ScrollLink
            onClick={handleClose}
            to="projects"
            smooth={true}
            duration={500}
            className="link-line"
            tabIndex={0}>
            <p>04.</p>
            <li>{t("header.projects")}</li>
          </ScrollLink>
          <ScrollLink
            onClick={handleClose}
            to="contact"
            smooth={true}
            duration={500}
            className="link-line"
            tabIndex={0}>
            <p>05.</p>
            <li>{t("header.contact")}</li>
          </ScrollLink>
          <LanguageSwitcher />
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
