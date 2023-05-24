// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "button.label": "En",
      "header.about": "About",
      "header.skills": "Skills",
      "header.experience": "Experience",
      "header.projects": "Projects",
      "header.contact": "Contact",
      "hero.text": "Hey, I'm",
      "hero.about.first":
        "I'm a software developer based in Buenos Aires, Argentina.",
      "hero.about.second":
        "I specialize in building websites and applications, with a very attentive eye to detail.",
      "about.me.title": "About me",
      "bio.description.first":
        "Hello, thank you for visiting my page! I'm a fullstack developer with 1 year and a half of experience. I'm currently working in Altimetrik mainly as a Frontend developer. I began my journey as a programmer back in 2020 and in 2021 I was awarded with a scholarship from Mercado Libre and Globant to become a fullstack developer.",
      "bio.description.second":
        "What I enjoy most about web development is the opportunity to continuously learn and improve my skills. I am passionate about creating high-quality user experiences that are both functional and visually appealing. When I am not coding, you can find me reading or watching movies. Let's connect!",
      "button.cv": "Download resume",
      "skills.title": "Skills",
      "database.title": "Database",
      "version.control": "Version control",
      "coming.soon": "More coming soon...",
      "experience.title": "Experience",
      "work.title": "Work",
      "education.title": "Education",
      "altimetrik.software": "Software developer",
      "altimetrik.second": "Dec 2022 - present",
      "altimetrik.intern": "Technical apprentice",
      "altimetrik.first": "Apr 2022 - Dec 2022",
      "altimetrik.description.second":
        "Part of the web development team in charge of creating applications in different projects. I work with clients from all around the world.",
      "altimetrik.description.first":
        " One of the selected interns that took part in the company's bootcamp and internship. I lead one of the teams that participated in the internship.",
      "digital.time": "Jul 2021 - present",
      "digital.description":
        " Bootcamp created alongside Mercado Libre and Globant where I am studying fullstack web development.",
      "arg.time": "Oct 2020 - Dec 2020",
      "arg.description":
        " Course dictated by the Ministry of Productive Development. In it I learned the basics of programming with JavaScript.",
      "contact.title": "Contact me!",
      "form.name": "Name",
      "form.message": "Message",
      "button.send": "Send",
      "contact.info":
        "If you want to know more about my projects or me, please don't hesitate to visit my social media",
      "social.media": "My social media",
      "footer.text": "Made with ♡ by Stephanie Righetti",
      "projects.title": "Projects",
      "game.finder": "Game finder application",
      "game.finder.des":
        "This is an app that allows you to browse for games either by name or console. You can scroll for more games, change the view from three columns to one, open a modal with detailed info of each game, view your last searches and switch from light to dark mode. It was built in JavaScript vainilla as a part of the Altimetrik's BFEDA bootcamp, but you can find a refactor version of it made in React on my Github.",
      "adventure.title": "Choose your own adventure",
      "adventure.des":
        "This is an app that allows you to choose how the story unfolds by allowing you to select different options. It was built as a practice for class components in React.",
      "digital.booking.des":
        "This is an app that allows you to book acommodations that you can filter by availability and place. You can register and login, select the accomodation and check the availability before you confirm. It also has a profile page where you can see your present and previous bookings. It was built as the final project for the Certified Tech Developer career.",
      "cv.download": "/Stephanie-Righetti-EN.pdf",
    },
  },
  es: {
    translation: {
      "button.label": "Es",
      "header.about": "Acerca",
      "header.skills": "Habilidades",
      "header.experience": "Experiencia",
      "header.projects": "Proyectos",
      "header.contact": "Contacto",
      "hero.text": "Hola, soy",
      "hero.about.first":
        "Soy una desarrolladora de software de Buenos Aires, Argentina.",
      "hero.about.second":
        "Me especializo en construir websites y aplicaciones, con un ojo atento para el detalle.",
      "about.me.title": "Acerca de mi",
      "bio.description.first":
        "Hola, gracias por visitar mi página! Soy una desarrolladora fullstack con 1 año y medio de experiencia. Actualmente trabajo en Altimetrik principalmente como desarrolladora Frontend. Comencé mi camino como programadora en 2020 y en 2021 me otorgaron una beca de Mercado Libre y Globant para convertirme en desarrolladora fullstack.",
      "bio.description.second":
        "Lo que más disfruto del desarrollo web es la oportunidad de aprender y mejorar continuamente mis habilidades. Me apasiona crear experiencias de usuario de alta calidad que sean tanto funcionales como visualmente atractivas. Cuando no estoy codeando, podés encontrarme leyendo o viendo películas. Conectemos!",
      "button.cv": "Descargar CV",
      "skills.title": "Habilidades",
      "database.title": "Bases de datos",
      "version.control": "Control de versiones",
      "coming.soon": "Más habilidades próximamente...",
      "experience.title": "Experiencia",
      "work.title": "Trabajo",
      "education.title": "Estudios",
      "contact.title": "Contactame!",
      "form.name": "Nombre",
      "form.message": "Mensaje",
      "button.send": "Enviar",
      "contact.info":
        "Si queres saber más sobre mi o mis proyectos, no dudes en contactarme en visitar mis redes sociales",
      "altimetrik.software": "Desarrolladora de software",
      "altimetrik.second": "Dic 2022 - actualidad",
      "altimetrik.intern": "Aprendiz técnico",
      "altimetrik.first": "Abr 2022 - Dic 2022",
      "altimetrik.description.second":
        "Parte del equipo de desarrollo web encargado de crear aplicaciones en diferentes proyectos. Trabajo con clientes de todo el mundo.",
      "altimetrik.description.first":
        "Una de las pasantes seleccionadas que participaron en el bootcamp y pasantía de la empresa. Lideré uno de los equipos que participaron en la pasantía.",
      "digital.time": "Jul 2021 - actualidad",
      "digital.description":
        "Bootcamp creado junto a Mercado Libre y Globant donde estoy estudiando desarrollo web fullstack.",
      "arg.time": "Oct 2020 - Dic 2020",
      "arg.description":
        "Curso dictado por el Ministerio de Desarrollo Productivo. En él aprendí las bases de la programación con JavaScript",
      "social.media": "Mis redes sociales",
      "footer.text": "Hecho con ♡ por Stephanie Righetti",
      "projects.title": "Proyectos",
      "game.finder": "Buscador de juegos",
      "game.finder.des":
        "Esta es una aplicación que te permite buscar juegos ya sea por nombre o consola. Podés scrollear para ver más juegos, cambiar la visualización de tres columnas a una, abrir un modal con información detallada de cada juego, ver tus últimas búsquedas y cambiar del modo claro al oscuro. Fue desarrollada en JavaScript vainilla como parte del bootcamp de Altimetrik, pero podés encontrar una versión refactorizada hecha en React en mi Github.",
      "adventure.title": "Elige tu propia aventura",
      "adventure.des":
        "Esta es una aplicación que te permite elegir cómo se desarrolla la historia permitiéndote seleccionar diferentes opciones. Fue desarrollada para practicar los componentes de clase en React.",
      "digital.booking.des":
        "Esta es una aplicación que te permite reservar alojamientos que podés filtrar por disponibilidad y lugar. Te permite registrarte e iniciar sesión, seleccionar el alojamiento y verificar la disponibilidad antes de confirmar y también tiene una página de perfil donde podés ver tus reservas actuales y anteriores. Fue el proyecto final para la carrera de Certfied Tech Developer.",
      "cv.download": "/Righetti-Stephanie-ES.pdf",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
