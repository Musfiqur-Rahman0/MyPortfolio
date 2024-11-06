import React from "react";
import { Gmail, itemVariant2 } from "../consents";
import Form from "../components/Form";
import { RiWhatsappFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { ImTextColor } from "react-icons/im";

const ContactInfo = () => {
  return (
    <section
      id="contact-me"
      className="px-5 sm:px-10 flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 w-full "
    >
      <Form />
      <motion.div
        variants={itemVariant2}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="w-full sm:w-1/2"
      >
        <h2 className="font-semibold text-3xl">
          Let's <span className="font-bold text-4xl drop-shadow-lg">Talk</span>{" "}
          for
        </h2>
        <h2 className="text-2xl sm:text-4xl font-semibold drop-shadow-lg">
          Something speacial
        </h2>
        <p className="text-sm tracking-tighter mt-2">
          I seek to push the limit of creativity to create high engaging
          user-friendly and intractive expreience
        </p>
        <div className="flex items-center gap-3  mt-5 sm:mt-10">
          <span className="p-2 bg-black rounded-full">
            <SiGmail size={16} color="white" />
          </span>
          <h2 className="text-sm sm:text-2xl font-semibold "> {Gmail}</h2>
        </div>
        <div className="font-semibold flex items-center gap-[1rem] mt-3">
          <span>
            <RiWhatsappFill size={30} color="black" />
          </span>
          01794213788
        </div>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
