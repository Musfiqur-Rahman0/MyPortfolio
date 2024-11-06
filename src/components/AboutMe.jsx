import React, { useEffect } from "react";
import {
  approach,
  dedication,
  intro,
  itemVariant,
  itemVariant2,
} from "../consents";
import heroimg2 from "../assets/Pictures/Group 1000015845.png";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="h-[45vh] w-full px-5 sm:px-10 py-5 flex items-center gap-5"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="h-[40vh] w-[45%] relative origin-center"
      >
        <img src={heroimg2} alt="" className="h-full w-full object-contain" />
      </motion.div>
      <motion.div
        variants={itemVariant2}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="w-1/2 h-full flex flex-col   md:justify-center  overflow-y-scroll sm:overflow-hidden"
      >
        <h2 className=" text-3xl font-semibold mb-4">
          About <span className="font-light">me</span>
        </h2>
        <p className="text-[0.7rem]">{intro}</p> <br />
        <p className="text-[0.7rem]">{dedication}</p>
        <br />
        <p className="text-[0.7rem]">{approach}</p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
