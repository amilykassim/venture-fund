"use client";

import { allOnceViewport } from "@/animations/viewports";
import { Variant, useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    show: Variant;
  };
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
    transform: "translate(0px, 100%) rotateX(-95deg)",
  },
  show: {
    opacity: 1,
    y: 0,
    transform: "translate(0px, 0%)",
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 90,
    },
  },
};

export default function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("show");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("show");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        whileInView="show"
        // animate={controls}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.008,
            },
          },
          hidden: {},
        }}
        viewport={allOnceViewport}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
