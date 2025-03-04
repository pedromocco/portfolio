// Animaciones reutilizables
export const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, type: "spring", bounce: 0.4 },
  };
  
  export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.4 },
  };
  
  export const textAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, delay: 0.2, staggerChildren: 0.1 },
  };