import { Variants } from "framer-motion";

export const LandingVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      // type: "spring",
      staggerChildren: 0.3,
      stiffness: 100,
    },
  },
};
