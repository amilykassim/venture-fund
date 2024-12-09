import { Variants } from "framer-motion";

export const downUpRotateX: Variants = {
  hidden: { opacity: 0, transform: "translate(0px, 100%) rotateX(-95deg)" },
  show: {
    opacity: 1,
    transform: "translate(0px, 0%)",
    transition: { duration: 0.5 },
  },
};
