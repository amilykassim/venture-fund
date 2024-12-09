import { Variants } from "framer-motion";

export const rightIn: Variants = {
  hidden: { opacity: 0, transform: "translate(50%, 0)" },
  show: {
    opacity: 1,
    transform: "translate(0px, 0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
