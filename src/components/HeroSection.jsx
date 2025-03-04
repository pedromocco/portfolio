import React, { useContext } from "react";
import { motion } from "motion/react";
import heroImage from "../assets/heroimage.png";
import { fadeInScale, fadeInUp, textAnimation } from "../animations";
import { heroTexts } from "../texts";
import { LanguageContext } from "../LanguageContext";

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const { name, title, description, downloadCvButtonText } =
    heroTexts[language];

  return (
    <section id="home" className="flex flex-col xl:flex-row justify-center text-center xl:text-left items-center mt-10 p-3">
      {/* Imagen */}
      <motion.img
        variants={fadeInScale}
        initial="initial"
        animate="animate"
        src={heroImage}
        alt="Hero Image"
        className="w-70 h-70 xl:w-120 xl:h-120 object-cover drop-shadow-xl mb-10"
      />

      {/* Contenido */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="xl:max-w-md"
      >
        {/* Nombre */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="font-black text-6xl xl:text-8xl mb-3"
        >
          {name}
        </motion.h1>

        {/* Título Animado */}
        <motion.span
          variants={textAnimation}
          initial="initial"
          animate="animate"
          className="text-2xl font-extrabold text-amber-400 animated-gradient"
        >
          {title}
        </motion.span>

        {/* Descripción */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.02 }}
          className="p-2 mt-3"
        >
          <span className="font-black text-amber-400">
            3 years of experience
          </span>{" "}
          {description}
        </motion.p>

        {/* Botones */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex justify-center xl:justify-start gap-4 mt-5"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="https://drive.google.com/file/d/1UKy7YuVTiqtvRpeOK1VHtIXxYrsaGZM1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-yellow-600 border-2 border-yellow-500 active:bg-yellow-700 cursor-pointer"
          >
            {downloadCvButtonText}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
