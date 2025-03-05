import { useContext, useState } from "react";
import { LanguageContext } from "../LanguageContext";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const socialLinks = [
    {
      id: 1,
      icon: <FaWhatsapp className="text-4xl text-green-500" />,
      name: "WhatsApp",
      url: "https://wa.me/+584141857541",
    },
    {
      id: 2,
      icon: <FaLinkedin className="text-4xl text-blue-700" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pedromocco/",
    },
    {
      id: 3,
      icon: <FaGithub className="text-4xl text-white" />,
      name: "Github",
      url: "https://github.com/pedromocco/",
    },
    {
      id: 4,
      icon: <HiOutlineMail className="text-4xl text-red-500" />,
      name: language === "es" ? "Correo" : "Email",
      url: "mailto:pedromocco00@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-black/20 justify-center items-center align-center text-center py-20 md:p-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-amber-400 mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {language === "es" ? "Contacto" : "Contact"}
      </motion.h2>

      <div>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 px-5"
        >
          {language === "es"
            ? "Me gustaría integrarme a tu equipo. Si quieres contactarme para otorgarme una entrevista puedes hacerlo de las siguientes maneras. ¡Muchas gracias por llegar hasta aquí"
            : "I would like to join your team. If you want to contact me to grant me an interview you can do it in the following ways. Thank you so much for coming this far!"}
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-1 gap-12">
        {/* Social Media Cards */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-4 w-full">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={
                  !item.url
                    ? (e) => {
                        e.preventDefault();
                        item.onClick();
                      }
                    : undefined
                }
                className={`bg-black/30 border border-white/20 p-6 rounded-lg flex flex-col items-center gap-3 transition-transform hover:scale-105 ${
                  item.name === "WhatsApp"
                    ? "hover:bg-green-500/20"
                    : item.name === "LinkedIn"
                    ? "hover:bg-blue-500/20"
                    : item.name === "Email" || item.name === "Correo"
                    ? "hover:bg-red-500/20"
                    : item.name === "Github"
                    ? "hover:bg-white/20"
                    : ""
                }`}
              >
                {item.icon}
                <span className="text-white text-lg font-medium">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default ContactSection;
