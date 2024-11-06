import React from "react";
import heroimg from "../assets/Pictures/Group 1000015839.png";

import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import { ImTextColor } from "react-icons/im";
import { itemVariant, itemVariant2 } from "../consents";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse sm:flex-row items-center  gap-4 h-[75vh] md:h-[40vh] lg:h-[60vh]  w-full px-5 md:px-8 lg:px-16 lg:pt-5 pb-2 mt-20">
      <motion.div
        variants={itemVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        className="w-full h-full lg:w-[60%] flex flex-col items-start justify-center"
      >
        <h2 className="text-sm font-light">
          Hellow! I'm &nbsp;
          <span className="text-black font-semibold text-2xl drop-shadow-md">
            Musfiqur Rahman.
          </span>
        </h2>
        <span className="text-2xl sm:text-3xl lg:text-4xl outline-white text-black font-semibold drop-shadow-md">
          Frontend&nbsp;
          <span className="text-sm sm:text-xl font-light ">Developer</span>
        </span>
        <h2 className=" text-xl sm:text-2xl font-light ">
          Based In
          <span className="font-semibold drop-shadow-lg"> Bangladesh.</span>
        </h2>
        <p className="text-[0.7rem] tracking-tighter mt-5">
          A skilled frontend developer with a strong foundation in HTML, CSS,
          and JavaScript, . Dedicated to continuous learning and staying
          up-to-date with the latest web technologies
        </p>
        <div className=" flex mt-2 md:mt-20 gap-2 lg:gap-5 lg:absolute bottom-0">
          <SocialLinks />
        </div>
      </motion.div>
      <motion.div
        variants={itemVariant2}
        initial="hidden"
        transition={{ duration: 0.8 }}
        whileInView="visible"
        className="h-full w-full "
      >
        <img
          src={heroimg}
          alt="heroimg"
          className="h-full w-full object-cover md:object-contain "
        />
      </motion.div>
    </section>
  );
};

export default Hero;
