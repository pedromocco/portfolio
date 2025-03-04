import React, { useContext } from "react";
import { motion } from "motion/react";
import { LanguageContext } from "../LanguageContext";

// Definimos los textos directamente en el componente
const aboutContent = {
  en: {
    title: "About Me",
    paragraphs: [
      {
        id: "intro",
        text: "My name is Pedro Moccó, a web developer passionate about solving real-life problems with code. My favorite programming language is JavaScript, and my go-to framework is React, which I enjoy using to create dynamic interfaces and reusable components that bring modern, scalable projects to life."
      },
      {
        id: "experience",
        text: "My programming journey truly began 4 years ago when I decided to take it seriously after an internship at SAP, which was ironically quite challenging: I only knew HTML and had to learn on the fly! That experience taught me to adapt quickly and embrace technical challenges with creativity (and a lot of coffee ☕)."
      },
      {
        id: "music",
        text: (
          <>
            Before coding, I was a music producer for 7 years, working with artists like{" "}
            <a 
              href="https://www.youtube.com/watch?v=udk4EJ3WYyo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-700 transition-colors"
            >
              BRYAL
            </a>{" "}
            and{" "}
            <a 
              href="https://www.youtube.com/watch?v=wX0Epkh6zpY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-700 transition-colors"
            >
              DARMY
            </a>
            . I recommend get into my last releases in my Youtube channel. <a 
              href="https://www.youtube.com/watch?v=-G-Dw7AU7Fk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-700 transition-colors"
            >
              Visit here
            </a>
          </>
        )
      },
      {
        id: "gaming",
        text: "Since childhood, I've been drawn to video games. My dream is to develop my own game or compose music for one. Every line of code I write is a step toward that goal."
      },
      {
        id: "why",
        text: (
          <>
            <strong>Why work with me?</strong>
            <ul className="list-disc pl-5 mt-3">
              <li><strong className="text-amber-500">Committed:</strong> Music taught me discipline - deadlines met, code documented, bugs fixed.</li>
              <li><strong className="text-amber-500">Curious:</strong> Always learning new frameworks, libraries, or music production tricks.</li>
              <li><strong className="text-amber-500">Loyal:</strong> Transparent communication with solution-oriented feedback.</li>
            </ul>
          </>
        )
      }
    ],
    closing: "If you're looking for someone who combines the logic of a developer with the creativity of an artist, I'm the person for you! I'm excited to join your team and offer all my knowledge to solve problems."
  },
  es: {
    title: "Sobre mí",
    paragraphs: [
      {
        id: "intro",
        text: "Mi nombre es Pedro Moccó, un desarrollador web apasionado por solucionar problemas cotidianos con código. Mi lenguaje favorito es JavaScript y mi framework de cabecera es React, con el que creo interfaces dinámicas y componentes reutilizables para proyectos modernos y escalables."
      },
      {
        id: "experience",
        text: "Mi camino en programación comenzó hace 4 años tras una pasantía en SAP que fue todo un reto: ¡solo sabía HTML! Aprendí a adaptarme rápido y abrazar desafíos con creatividad (y mucho café ☕)."
      },
      {
        id: "music",
        text: (
          <>
            Antes de programar, fui productor musical durante 7 años trabajando con artistas como{" "}
            <a 
              href="https://www.youtube.com/watch?v=udk4EJ3WYyo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-700 transition-colors"
            >
              BRYAL
            </a>{" "}
            y{" "}
            <a 
              href="https://www.youtube.com/watch?v=wX0Epkh6zpY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-700 transition-colors"
            >
              DARMY
            </a>
            . Te recomiendo entrar a mi canal de Youtube. <a 
              href="https://www.youtube.com/watch?v=-G-Dw7AU7Fk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-700 transition-colors"
            >
              Visitalo aquí
            </a>
          </>
        )
      },
      {
        id: "gaming",
        text: "Desde niño, los videojuegos han sido mi pasión. Mi sueño es desarrollar un juego o componer su banda sonora. Cada línea de código me acerca a ese objetivo."
      },
      {
        id: "why",
        text: (
          <>
            <strong>¿Por qué trabajar conmigo?</strong>
            <ul className="list-disc pl-5 mt-3">
              <li><strong className="text-amber-500">Comprometido:</strong> La música me enseñó disciplina - plazos cumplidos, código documentado, errores corregidos.</li>
              <li><strong className="text-amber-500">Curioso:</strong> Siempre aprendiendo nuevos frameworks, librerías o trucos de producción musical.</li>
              <li><strong className="text-amber-500">Fiel:</strong> Comunicación transparente con propuestas concretas.</li>
            </ul>
          </>
        )
      }
    ],
    closing: "Si buscas a alguien que combine lógica de desarrollador con creatividad artística, ¡soy tu persona! Estoy listo para contribuir con mis conocimientos y sumarme a su equipo."
  }
};

const AboutSection = () => {
  const { language } = useContext(LanguageContext);
  const content = aboutContent[language];

  return (
    <section id="about" className="flex flex-col md:flex-row gap-10 items-center mpy-20 p-5 bg-black/30">
      {/* Imagen con animación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        className="w-full md:w-1/3"
      >
        <img
          src="aboutme.jpg"
          alt="Pedro Mocco"
          className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
        />
      </motion.div>

      {/* Contenido con animación */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-2/3 space-y-8"
      >
        <h2 className="text-4xl font-bold text-amber-400">{content.title}</h2>
        <div className="left-0 right-0 h-0.5 bg-amber-700 z-[1] mb-10"></div>


        {content.paragraphs.map((paragraph) => (
          <motion.div
            key={paragraph.id}
            className="text-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {paragraph.text}
          </motion.div>
        ))}

        <motion.p
          className="text-xl font-semibold text-amber-400 animated-gradient"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {content.closing}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutSection;