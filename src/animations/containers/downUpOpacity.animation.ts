import { Variants } from "framer-motion";

export const downUpOpacity: Variants = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,

      // ease: "easeIn",
      staggerChildren: 0.2,
    },
  },
};
