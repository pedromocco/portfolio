import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import TechnologieSections from "./components/TechnologieSections";
import { LanguageProvider } from "./LanguageContext";

function App() {

  return (
    <>
      <div className="w-full h-full bg-radial-[at_50%_75%] from-zinc-700 via-stone-800 to-stone-950 to-90% text-white font-comfortaa m-0 pt-[60px]">
        <LanguageProvider>
          <Navbar />
          <HeroSection />
          <ExperienceSection />
          <TechnologieSections />
          <ProjectSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </LanguageProvider>
      </div>
    </>
  );
}

export default App;
