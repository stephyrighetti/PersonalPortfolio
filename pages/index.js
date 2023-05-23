import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Scroll from "../components/Scroll";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";

export default function Home() {
  const aboutMeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Head>
        <title>SRighetti's Portfolio</title>
        <meta name="description" content="SRighetti's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/crow-solid.png" />
      </Head>
      <section
        className="hero-scroll-section"
        data-aos="fade-up"
        data-aos-easing="ease">
        <Hero />
        <Scroll targetRef={aboutMeRef} />
      </section>
      <AboutMe aboutMeRef={aboutMeRef} />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
