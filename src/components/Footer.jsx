import React from "react";
import LOGO from "../assets/logo 1.png";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-5 sm:px-10 py-4 bg-black text-white">
      <div className="flex items-center">
        <img src={LOGO} alt="logo" />
        <h2>Monster</h2>
      </div>
      <div className="">
        <p className="text-[0.6rem]">&copy; All copyright reserved</p>
        <p className="text-end text-sm">By Monster</p>
      </div>
    </footer>
  );
};

export default Footer;
