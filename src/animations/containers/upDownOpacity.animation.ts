import { Variants } from "framer-motion";

export const upDownOpacity: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      // ease: "linear",
      // staggerChildren: 0.2,
      stiffness: 100,
    },
  },
};
