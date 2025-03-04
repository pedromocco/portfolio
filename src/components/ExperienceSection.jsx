import { motion, useScroll } from "motion/react";
import { experienceTexts, navbarText } from "../texts";
import { LanguageContext } from "../LanguageContext";
import { useContext } from "react";

const ExperienceSection = () => {
  const { language } = useContext(LanguageContext);
  const experiences = experienceTexts[language];
  const navbar = navbarText[language];

  return (
    <section id="experiences" className="py-12 md:py-16">
      <div className="relative max-w-4xl mx-auto max-w-full bg-zinc-900/80 border border-zinc-800 p-20 rounded-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-12 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {navbar.experiences}
        </motion.h2>
        <div className="left-0 right-0 h-0.5 bg-amber-700 z-[1] mb-10"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`mb-12 md:mb-16 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          >
            {/* Contenido de la experiencia */}
            <div className="relative w-11/12 md:w-3/4">
              {/* Tarjeta de experiencia */}
              <motion.div
                className="bg-black/50 rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, stiffness: 300 }}
              >
                <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">
                  {exp.title}
                </h3>
                <p className="text-amber-400 mb-4">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.dates}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.04 }}
                      transition={{ stiffness: 300 }}
                      className="text-sm text-gray-400 bg-amber-600/20 p-1 px-3 rounded-full border border-amber-500/20 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
