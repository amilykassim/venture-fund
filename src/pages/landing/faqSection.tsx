import { VenturaFAQs } from "../../utils/constants";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const handleDelay = (index: number, endingPoint: number) => {
    const position = index + 1;
    return 0.1 * position;
  };

  return (
    <div className="w-full mt-24">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="lg:w-1/2 mr-auto mb-12"
        >
          <p className="mt-2 text-3xl lg:text-4xl font-segoe-bold tracking-tight text-landing-primary">
            We're here for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-segoe-regular">
            Our experts are here to answer all your questions.
          </p>
        </motion.div>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {VenturaFAQs.map((faq, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: handleDelay(idx + 1, VenturaFAQs.length),
              }}
              viewport={{ once: true }}
              key={idx}
              onClick={() => {

              }}
            >
              <Disclosure as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left focus:outline-none">
                        <span className="text-base font-segoe-semibold leading-7 focus:outline-none text-landing-primary">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <i
                              className="uc-icon text-gray-600 text-xl"
                              aria-hidden="true"
                            >
                              &#xea8d;
                            </i>
                          ) : (
                            <i
                              className="uc-icon text-gray-600 text-xl"
                              aria-hidden="true"
                            >
                              &#xead5;
                            </i>
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 font-segoe-regular">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQSection;
