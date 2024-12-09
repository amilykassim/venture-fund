import { Variants } from "framer-motion";

export const pictureContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // type: "spring",
      ease: "easeIn",
      staggerChildren: 0.3,
      easings: "ease-in",
    },
  },
};

type pictureItems = 1 | 2 | 3;

export const pictureItems: Record<pictureItems, Variants> = {
  1: {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  2: {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  3: {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
};
