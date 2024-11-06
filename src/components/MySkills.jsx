import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { floatAnimation, skills, textUp } from "../consents";

const MySkills = () => {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <section id="skills" className="px-5 sm:px-16">
      <motion.h2
        variants={textUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-3xl font-light text-center"
      >
        My <span className="font-semibold">Skills</span>
      </motion.h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-10 items-center mt-5  sm:mt-10">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={idx}
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(false)}
              variants={floatAnimation}
              initial="initial"
              animate="animate"
              custom={idx}
              className="relative flex flex-col items-center justify-center gap-2 h-20 w-full sm:h-32 sm:w-full border rounded-sm border-black hover:text-white transition-all cursor-pointer overflow-hidden"
            >
              <span className="z-10 hover:text-white">
                <Icon size={35} />
              </span>
              <p className="capitalize text-sm text-center z-10">
                {skill.label}
              </p>
              <AnimatePresence>
                {isHovered === idx && (
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 100 }}
                    exit={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute h-[2px] w-[2px] rounded-full bg-black "
                  ></motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MySkills;
