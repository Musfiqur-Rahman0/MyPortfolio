import React, { useContext, useState } from "react";
import { socialIcons } from "../consents";
import { globalContext } from "../context/Context";
import { AnimatePresence, motion } from "framer-motion";

const SocialLinks = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <>
      {socialIcons.map((data, idx) => {
        const Icon = data.icon;
        return (
          <a href={data.link}>
            <motion.div
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(false)}
              key={idx}
              className={`relative h-5 sm:h-8 w-5 sm:w-8 border border-black flex items-center justify-center  rounded-sm  transition-all overflow-hidden cursor-pointer ${
                isHovered === idx ? "hover:text-white " : "text-black"
              }`}
            >
              <span className="z-10">
                <Icon />
              </span>
              <AnimatePresence>
                {isHovered === idx && (
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 25 }}
                    exit={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute h-[2px] w-[2px] rounded-full bg-black `}
                  ></motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </a>
        );
      })}
    </>
  );
};

export default SocialLinks;
