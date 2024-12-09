import { Variants } from "framer-motion";

export const scale: Variants = {
  hidden: { opacity: 0, transform: "scale(0)" },
  show: {
    opacity: 1,
    transform: "scale(100%)",
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  tap: {
    scale: 1.3,
  },
};

export const scaleNoOpacity: Variants = {
  hidden: { transform: "scale(0)" },
  show: {
    transform: "scale(100%)",
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 4,
    },
  },
  tap: {
    scale: 1.3,
  },
};
