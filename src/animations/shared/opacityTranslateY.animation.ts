import { Variants } from "framer-motion";

export const opacityTranslateY: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
