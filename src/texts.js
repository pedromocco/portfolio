// Textos estáticos
export const heroTexts = {
  en: {
    name: "Pedro Mocco",
    title: "Web Developer",
    description:
      " in web development. Productive and excited daily to learn and work.",
    downloadCvButtonText: "Download CV",
  },
  es: {
    name: "Pedro Mocco",
    title: "Desarrollador Web",
    description:
      " en desarrollo web. Productivo y emocionado diariamente por aprender y trabajar.",
    downloadCvButtonText: "Descargar CV",
  },
};

export const navbarText = {
  en: {
    home: "Home",
    experiences: "Experiences",
    technologies: "Technologies",
    projects: "Projects",
    about: "About me",
    contact: "Contact"
  },
  es: {
    home: "Inicio",
    experiences: "Experiencias",
    technologies: "Tecnologías",
    projects: "Proyectos",
    about: "Sobre mi",
    contact: "Contacto"
  },
};

export const experienceTexts = {
  en: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "La Marca C.A",
      dates: "February 2025",
      description:
        "Application design for transaction entry management. Server creation for transforming data sent from the front-end to PDF. Integration of Telegram API for automatic sending.",
      technologies: [
        "React",
        "Electron",
        "Express",
        "PDF-Lib",
        "TailwindCSS",
        "Node.js",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: 'Colegio "Siglo XXI"',
      dates: "November 2024",
      description:
        "Creation of a view to query a table with assignments submitted by students. Handling data submitted by students and consuming endpoints.",
      technologies: [
        "React",
        "Redux",
        "Axios",
        "Bootstrap",
        "Typescript",
        "Node.js",
        "Express",
      ],
    },
    {
      id: 3,
      title: "SAP Consultant",
      company: "SAP Internship",
      dates: "March 2023",
      description:
        "Automatic data loading, integration, and visualization of data from Excel. Fetching data from an external API using Excel-loaded data.",
      technologies: ["ABAP", "SAP Workspace", "Excel", "API Rest"],
    },
  ],
  es: [
    {
      id: 1,
      title: "Desarrollador Full Stack",
      company: "La Marca C.A",
      dates: "Febrero 2025",
      description:
        "Diseño de aplicación para gestión de entradas de transacciones. Creación de servidor para transformar datos enviados desde el front-end a PDF. Integración de la API de Telegram para envío automático.",
      technologies: [
        "React",
        "Electron",
        "Express",
        "PDF-Lib",
        "TailwindCSS",
        "Node.js",
      ],
    },
    {
      id: 2,
      title: "Desarrollador Full Stack",
      company: 'Colegio "Siglo XXI"',
      dates: "Noviembre 2024",
      description:
        "Creación de una vista para consultar una tabla con tareas enviadas por estudiantes. Manejo de datos enviados por estudiantes y consumo de endpoints.",
      technologies: [
        "React",
        "Redux",
        "Axios",
        "Bootstrap",
        "Typescript",
        "Node.js",
        "Express",
      ],
    },
    {
      id: 3,
      title: "Consultor SAP",
      company: "Práctica SAP",
      dates: "Marzo 2023",
      description:
        "Carga automática de datos, integración y visualización de datos desde Excel. Obtención de datos de una API externa utilizando datos cargados desde Excel.",
      technologies: ["ABAP", "SAP Workspace", "Excel", "API Rest"],
    },
  ],
};

export const projectsTexts = {
  en: [
    {
      name: "PDFgram",
      description:
        "Allows users to fill out a form on the frontend, send the data to the backend for processing, generate a PDF file with the data organized in a table, and finally deliver the PDF file via a Telegram bot.",
      image: "pdfgram.webp",
      codeLink: "https://github.com/pedromocco/PDFGram-Nextjs",
      demoLink: "https://pdfgram.vercel.app/",
    },
    {
      name: "sqrt (URL Shortener)",
      description:
        "The application allows users to shorten long URLs into shorter, more manageable links. Additionally, it automatically redirects users to the original site when they access the shortened link.",
      image: "shortener.webp",
      codeLink: "https://github.com/pedromocco/sqrt-urlShortner",
      demoLink: "https://sqrt-nine.vercel.app/",
    },
    {
      name: "Vera-01",
      description:
        "Features a mono-oscillator synthesizer developed with React.js and Tone.js. The application allows users to manipulate various sound parameters, such as envelope, reverb, and delay, as well as select between different wave types.",
      image: "vera-01.webp",
      codeLink: "https://github.com/pedromocco/vera-01",
      demoLink: "https://vera-01.vercel.app/",
    },
    {
      name: "Tetris P5.JS",
      description:
        "Built with HTML5, CSS, and JavaScript, leveraging the p5.js library for game programming and physics logic. It also implements sounds and music (created by me) to provide a complete experience of what can be achieved with these technologies.",
      image: "tetrisp5js.webp",
      codeLink: "https://github.com/pedromocco/tetris",
      demoLink: "https://tetrisp5js.vercel.app",
    },
  ],
  es: [
    {
      name: "PDFgram",
      description:
        "Permite a los usuarios llenar un formulario en el frontend, enviar los datos al backend para su procesamiento, generar un archivo PDF con los datos organizados en una tabla y, finalmente, entregar el archivo PDF mediante un bot de Telegram.",
      image: "pdfgram.webp",
      codeLink: "https://github.com/pedromocco/PDFGram-Nextjs",
      demoLink: "https://pdfgram.vercel.app/",
    },
    {
      name: "sqrt (Acortador de URL)",
      description:
        "La aplicación permite a los usuarios acortar URLs largas en enlaces más cortos y manejables. Además, redirige automáticamente a los usuarios al sitio original cuando acceden al enlace acortado.",
      image: "shortener.webp",
      codeLink: "https://github.com/pedromocco/sqrt-urlShortner",
      demoLink: "https://sqrt-nine.vercel.app/",
    },
    {
      name: "Vera-01",
      description:
        "Presenta un sintetizador de mono-oscilador desarrollado con React.js y Tone.js. La aplicación permite a los usuarios manipular varios parámetros de sonido, como el envelope, el reverb y el delay, además de seleccionar entre diferentes tipos de ondas.",
      image: "vera-01.webp",
      codeLink: "https://github.com/pedromocco/vera-01",
      demoLink: "https://vera-01.vercel.app/",
    },
    {
      name: "Tetris P5.JS",
      description:
        "Está hecho con HTML5, CSS y JavaScript, apoyado en la biblioteca p5.js para la programación y lógica física del juego. También implementa sonidos y música (creados por mí) para brindar una experiencia completa de lo que se puede lograr con estas tecnologías.",
      image: "tetrisp5js.webp",
      codeLink: "https://github.com/pedromocco/tetris",
      demoLink: "https://tetrisp5js.vercel.app",
    },
  ],
};

export const technologiesTexts = {
  en: {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    level: {
      experienced: "Experienced",
      intermediated: "Intermediated",
    },
  },
  es: {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Herramientas",
    level: {
      experienced: "Experimentado",
      intermediated: "Intermedio",
    },
  },
};