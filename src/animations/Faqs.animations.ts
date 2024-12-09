import { Variants } from "framer-motion";

export const downUpTranslateY: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.4,
      stiffness: 100,
    },
  },
};
