import React, { useState } from "react";
import { cardUpDown, testimonials, textUp } from "../consents";
import { motion } from "framer-motion";
const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="testimonials"
      className="px-5 sm:px-10 py-3 sm:py-5 flex items-center h-auto w-full "
    >
      <div className=" h-auto w-full py-3 px-5">
        <motion.h2
          variants={textUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-light"
        >
          My <span className="font-semibold"> Testimonils</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center px-5 mt-5">
          {testimonials.map((data, idx) => {
            return (
              <motion.div
                key={idx}
                variants={cardUpDown}
                initial="initial"
                animate="animate"
                custom={idx}
                onMouseEnter={() => setIsHovered(idx)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex flex-col items-center justify-center  px-5 py-5 shadow-xl rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <div className="h-20 w-20 rounded-full border-2 border-black relative">
                  <img src={data.profile} alt={data.name} />
                  <span className="absolute bottom-[-35px] text-4xl right-[-10px] p-2 rounded-full  ">
                    ”
                  </span>
                </div>
                <p className="text-center mt-4 text-sm">{data.comment}</p>
                <div
                  className={`h-[2px] w-20 ${
                    isHovered === idx ? "bg-white" : "bg-black"
                  } mt-5`}
                ></div>
                <p className="capitalize mt-2 text-lg">{data.name}</p>
                <p className="capitalize mt-1 text-sm text-gray-600">
                  {data.profession}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
