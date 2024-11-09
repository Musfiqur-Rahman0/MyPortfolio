import React, { useRef } from "react";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import { buttonVariants, itemVariant } from "../consents";
import emailjs from "@emailjs/browser";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_em9bvuq", "template_7saikrf", form.current, {
        publicKey: "GfkCy4-xZWgE97fKf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.form
      variants={itemVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      onSubmit={sendEmail}
      ref={form}
      className="w-full sm:w-1/2 flex flex-col items-center gap-3 sm:gap-5 relative"
    >
      <input
        type="text"
        name="to_name"
        placeholder="Your name : "
        className="w-[80%] border border-black px-5 py-1 outline-none rounded-md text-sm"
      />
      <input
        type="email"
        name="from_name"
        placeholder="Email"
        className="w-[80%] border border-black px-5 py-1 outline-none rounded-md text-sm"
      />
      <input
        type="text"
        name="website"
        placeholder="Your website (if exists)"
        className="w-[80%] border border-black px-5 py-1 outline-none rounded-md text-sm"
      />
      <textarea
        name="message"
        placeholder="What you Want ? "
        className="w-[80%] h-32 border border-black px-5 py-1 outline-none rounded-md text-sm"
      ></textarea>
      <div className="flex gap-5 w-[80%] justify-between ">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileTap="tap"
          whileHover="hover"
          transition={{ duration: 0.4 }}
          className="px-4 py-1 bg-black text-white hover:font-semibold"
        >
          Submit
        </motion.button>
        <div className="flex items-center gap-2 sm:gap-5">
          <SocialLinks />
        </div>
      </div>
    </motion.form>
  );
};

export default Form;
