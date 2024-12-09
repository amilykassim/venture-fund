import { pictureContainerVariants } from "@/animations/About.animations";
import { scale } from "@/animations/shared";
import { someOnceViewport } from "@/animations/viewports";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import AnimatedText from "../../components/shared/AnimateText";
import useWindowSize from "@/hooks/useWindowSize";
import { downUpTranslateY } from "@/animations/Faqs.animations";
import { cn } from "@/lib/utils";


export function HeroSection() {

  const { width } = useWindowSize();

  return (

    <motion.div
      initial="hidden"
      whileInView="show"
      variants={pictureContainerVariants}
      viewport={someOnceViewport}
      className="mx-auto flex max-w-max flex-wrap items-center justify-center gap-6"
    >


      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          {/* <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            VENTURA, YOUR FUTURE
            <br />
            <span className="text-gray-600">BEGINS HERE</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Ventura is your launchpad to success. Dare to dream, and we’ll fund the journey!
            Whether you're building the next big thing or looking to back innovation, we're turning groundbreaking ideas into reality.
          </p> */}

          <motion.header className="space-y-5 text-center">
            <AnimatedText
              el="h1"
              className={cn(
                width! >= 1024 && true,
                "mx-auto overflow-y-clip mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              )}
              text={'VENTURA, YOUR FUTURE'}
            />
            {/* <br /> */}
            <AnimatedText
              el="h1"
              className={cn(
                width! >= 1024 && true,
                "mx-auto overflow-y-clip mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-600"
              )}
              text={'BEGINS HERE'}
            />

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg text-gray-600"
              variants={downUpTranslateY}
            >
              {`Ventura is your launchpad to success. Dare to dream, and we’ll fund the journey!
            Whether you're building the next big thing or looking to back innovation, we're turning groundbreaking ideas into reality.`}
            </motion.p>
          </motion.header>

          <br />

          { /** Button */}
          <motion.div variants={scale}>
            <Button className="rounded-full px-8 py-6 text-lg">
              Get started
            </Button>
          </motion.div>


        </div>
      </section>
    </motion.div>

  )
}

