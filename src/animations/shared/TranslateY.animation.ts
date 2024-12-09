import { Variants } from "framer-motion";

export const TranslateY: Variants = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.5 } },
};
