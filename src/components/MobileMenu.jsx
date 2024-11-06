import React from "react";
import { IoMdClose } from "react-icons/io";
import { sections } from "../consents";

const MobileMenu = ({ setIsMobileMenuOpen, handleScroll }) => {
  return (
    <div className="absolute h-screen w-1/2 right-0 top-0 bg-black px-5 z-20">
      <span className="absolute right-3 top-5">
        <IoMdClose
          color="white"
          size={24}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </span>
      <div className="flex flex-col items-center gap-3 mt-16 text-white ">
        {sections.map((section, idx) => (
          <a
            href={`${section.targetId}`}
            onClick={(e) => handleScroll(e, section.targetId)}
            key={idx}
            className="capitalize text-sm cursor-pointer"
          >
            {section.id}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
