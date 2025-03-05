import { motion } from "motion/react";
import { navbarText, projectsTexts } from "../texts";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const ProjectSection = () => {
  const { language } = useContext(LanguageContext);
  const navbar = navbarText[language];
  const projects = projectsTexts[language];

  return (
    <section id="projects">
      <div className="py-15 md:p-15 mt-15">
        <motion.h2
          className="text-3xl md:text-4xl text-white font-bold text-center text-amber-400 mb-12 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {navbar.projects}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, stiffness: 300 }}
              viewport={{ once: true }}
              className="bg-amber-950/40 p-6 m-3 rounded-4xl text-center border border-black/20 shadow-xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-4xl"
              />
              <h2 className="font-extrabold text-2xl text-amber-500 mt-4">
                {project.name}
              </h2>
              <p className="text-gray-400 mt-3">{project.description}</p>

              <div className="mt-3">
                <button
                  onClick={() => window.open(project.codeLink, "_blank")}
                  className="bg-gray-500 border border-white/20 py-2 px-3 rounded-lg hover:scale-115 hover:bg-gray-400 transition active:scale-90 active:bg-gray-700 mx-3"
                >
                  Code
                </button>
                <button
                  onClick={() => window.open(project.demoLink, "_blank")}
                  className="bg-blue-500 border border-white/20 py-2 px-3 rounded-lg hover:scale-115 hover:bg-blue-400 transition active:scale-90 active:bg-blue-700 mx-3"
                >
                  Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
