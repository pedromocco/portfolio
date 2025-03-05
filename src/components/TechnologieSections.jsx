import { motion } from "motion/react";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { navbarText, technologiesTexts } from "../texts";

const TechnologieSections = () => {
  const { language } = useContext(LanguageContext);
  const navbar = navbarText[language];
  const texts = technologiesTexts[language];

  const technologies = {
    frontend: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React",
      "React Native",
      "Next.js",
      "Tailwindcss",
    ],
    backend: ["Node.js", "Python", "SQL", "Express"],
    tools: ["Figma", "Photoshop", "Git", "VS Code", "Github"],
  };

  return (
    <section id="technologies">
      <div className="bg-black/60 py-15 lg:p-15">
        <motion.h2
          className="text-3xl md:text-4xl text-white font-bold text-center mb-12 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {navbar.technologies}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          {Object.keys(technologies).map((stack) => (
            <motion.div
              key={stack}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-amber-950/40 p-10 m-3 h-96 rounded-4xl text-center font-bold"
            >
              <h2 className="font-extrabold text-3xl text-amber-500 shadown-lg mb-5">
                {texts[stack]}
              </h2>
              <ul className="grid grid-cols-2 text-start">
                {technologies[stack].map((tech, index) => (
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    key={index}
                    className="flex-col items-center m-2"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        width="15%"
                        height="15%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12L11 14L15.5 9.5M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851Z"
                          stroke="#32a852"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text-sm">{tech}</div>
                    </div>
                    <div className="text-xs text-gray-500/50 ml-8">
                      {tech === "Next.js" || tech === "Python"
                        ? texts.level.intermediated
                        : texts.level.experienced}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologieSections;