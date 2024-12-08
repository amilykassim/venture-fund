import { motion } from "framer-motion";

const HowToSection = () => {
  const steps = [
    {
      title: "Signup",
      description: "Create an account on Ventura",
      image:
        "https://imagedelivery.net/oie13id8YpvudjA6JEtRCw/20543dd7-5abf-4c07-cd94-35e273521600/public",
    },
    {
      title: "Browse Investments",
      description: "Review hundreds of investment opportunities from startups to large companies",
      image:
        "https://imagedelivery.net/oie13id8YpvudjA6JEtRCw/db78b89c-9fed-4c46-577d-f25d7ee07e00/public",
    },
    {
      title: "Make an investment",
      description: "Submit your payment and own a financial stake in a startup or large company",
      image:
        "https://imagedelivery.net/oie13id8YpvudjA6JEtRCw/25e9e473-33ac-462b-7082-2580bb006600/public",
    },
  ];

  const handleDelay = (index: number, endingPoint: number) => {
    const position = index + 1;
    if (position >= 1 && position <= endingPoint) {
      return 0.2 * position;
    } else {
      return 0.5;
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 rounded-md py-8 lg:py-12 px-6 lg:px-16 flex flex-col mt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        // transition={{ duration: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 60,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        className="w-full lg:w-3/4 text-center mx-auto mb-6 lg:mb-12"
      >
        <h2 className="text-1xl font-bold mb-4 text-indigo-600">
          Get started
        </h2>
        <div className="">
        <h3 className="text-2xl font-bold text-[#2B3674] mb-4">
            Start funding the future you deserve
          </h3>
        </div>
        <p className="text-[#2B3674]">
          Now you have the chance to invest in startups early, Own a financial stake in the next big company.
        </p>
      </motion.div>
      <div className="mt-8 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {steps.map((el, idx) => (
          <motion.div
            className="flex flex-col bg-gradient-to-b from-white rounded-md"
            key={idx}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 0 }}
            // transition={{ duration: 1, delay: handleDelay(idx, steps.length) }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 60,
              delay: handleDelay(idx, steps.length)
            }}
            viewport={{ once: true }}
          >
            <div className="flex-1 sm:px-6 lg:px-0 h-96 rounded-md px-4 py-12 flex justify-center items-center relative">
              <img src={el.image} className="w-3/4 flex absolute top-8" />
            </div>
            <div className="flex justify-center items-center">
              <div className="my-4 flex justify-center items-center rounded-full bg-indigo-600 shadow-sm w-12 h-12 mt-48">
                <span className="text-white text-2xl font-segoe-bold">
                  {idx + 1}
                </span>
              </div>
            </div>
            <div className="flex-1 px-4 lg:px-6">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg text-center">
                <p className="text-2xl font-segoe-bold tracking-tight text-landing-primary">
                  {el.title}
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-600 font-segoe-regular">
                  {el.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        {/* <Button onClick={() => {}}>Get Started</Button> */}
      </motion.div>
    </div>
  );
};

export default HowToSection;
