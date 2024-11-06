import React, { useEffect, useState } from "react";
import logo from "../assets/Pictures/logo 1.png";
import { HiOutlineDownload } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import { buttonVariants, sections } from "../consents";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  console.log(selectedSection);

  const name = "Monster";

  const handleSelectionSection = (idx) => {
    setSelectedSection(idx);
  };
  console.log(selectedSection);

  return (
    <nav className="fixed top-0 bg-white z-20 shadow-md flex justify-between items-center h-10 lg:h-20 w-full px-5 sm:px-14 py-[2rem]">
      <Link to="/">
        <div className="flex items-center  sm:gap-2 cursor-pointer">
          <img src={logo} alt="logo" className="cursor-pointer" />
          <h2 className="text-xl sm:text-2xl font-semibold sm:font-semibold ">
            {name}
          </h2>
        </div>
      </Link>
      <div className="hidden sm:block ">
        <div className="flex items-center gap-5">
          {sections.map((section, idx) => (
            <a
              key={idx}
              onClick={(e) => {
                handleScroll(e, section.targetId);
                handleSelectionSection(idx);
              }}
              href={`#${section.targetId}`}
              className="capitalize text-sm cursor-pointer"
            >
              {section.id}
              {selectedSection === idx && (
                <motion.div
                  layoutId="underline"
                  className="h-1 w-full bg-black rounded-md mt-1"
                ></motion.div>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileTap="tap"
          whileHover="hover"
          className=" flex items-center gap-2 px-4 py-[6px] bg-black text-white hover:font-semibold"
        >
          Resume
          <span>
            <HiOutlineDownload />
          </span>
        </motion.button>
      </div>
      <div className="sm:hidden">
        <span>
          <IoMdMenu size={24} onClick={handleToggleMenu} />
        </span>
        {isMobileMenuOpen && (
          <MobileMenu
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            handleScroll={handleScroll}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
