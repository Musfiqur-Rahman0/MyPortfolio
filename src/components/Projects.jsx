import React from "react";
import { cardUpDown, projects } from "../consents";
import { CiShare1 } from "react-icons/ci";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-15 sm:px-5 h-auto w-full border bg-black text-white"
    >
      <div className="px-3 py-4 flex flex-col">
        <h2 className="text-3xl font-light text-center">
          MY <span className="font-semibold ">Projects</span>
        </h2>
        <div className="sm:space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex items-center  gap-5 ${
                idx === 1 && "flex-row-reverse"
              }`}
            >
              <motion.div
                variants={cardUpDown}
                initial="initial"
                animate="animate"
                custom={idx}
                transition={{ delay: idx * Math.floor(Math.random()) }}
                className="h-[300px] w-[300px]  basis-[40%]"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <div className="basis-[50%] relative">
                <h2 className=" font-bold">0{project.id}</h2>
                <h1 className="text-2xl font-semibold">{project.title}</h1>
                <p className="text-sm line-clamp-3 sm:line-clamp-5 text-gray-400">
                  {project.description}
                </p>
                <a href={project.link} className="cursor-pointer">
                  <CiShare1 className="text-[20px] sm:text-[24px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
