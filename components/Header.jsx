import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setShowMenu, showIcon, setShowIcon, setSwitched }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 480px)").matches;
      setShowIcon(isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setShowMenu(true);
  };

  return (
    <header>
      <Link href="/">
        <h1 className="title-name">S Righetti</h1>
      </Link>
      <nav>
        {showIcon && <FontAwesomeIcon onClick={handleClick} icon={faBars} />}
        <ul className="nav-links">
          <ScrollLink
            to="about-me"
            smooth={true}
            duration={500}
            className="link-line"
            tabIndex={0}>
            <p>01.</p>
            <li>{t("header.about")}</li>
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className="link-line"
            tabIndex={0}>
            <p>02.</p>
            <li>{t("header.skills")}</li>
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="link-line"
            href="#experience"
            tabIndex={0}>
            <p>03.</p>
            <li>{t("header.experience")}</li>
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="link-line"
            href="#projects"
            tabIndex={0}>
            <p>04.</p>
            <li>{t("header.projects")}</li>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="link-line"
            href="#contact"
            tabIndex={0}>
            <p>05.</p>
            <li>{t("header.contact")}</li>
          </ScrollLink>
          <LanguageSwitcher setSwitched={setSwitched} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
