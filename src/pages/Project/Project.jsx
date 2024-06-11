import React, { useState } from "react";
import { FaGithub, FaPlay } from "react-icons/fa";
import Toggle from "./Toggle";

const Project = ({ title, date, description, tech, githubLink, demoLink, images }) => {
  const [toggle, setToggle] = useState(false);

  const handleNewPopUp = () => {
    setToggle((prev) => !prev);
  }

  if (toggle) {
    return (
      <Toggle
        title={title}
        date={date}
        description={description}
        tech={tech}
        githubLink={githubLink}
        demoLink={demoLink}
        toggle={toggle}
        setToggle={setToggle}
        images={images}
      />
    );
  }

  return (
    <div className="bg-white ml-7 mr-7 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title} <span className="text-sm font-thin flex mt-3">{date}</span></h2>
        <p className="font-medium text-sm text-gray-500 uppercase tracking-wide mb-4">{tech}</p>
        <p className="text-gray-700 mb-6">
          {description[0].substring(0, 50)}.....{" "}
          <button
            className="underline text-blue-500 hover:text-blue-700"
            onClick={handleNewPopUp}
          >
            Read More
          </button>
        </p>
        <div className="flex justify-between items-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaGithub className="mr-1" />
            <span>GitHub</span>
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-500 hover:underline"
            >
              <FaPlay className="mr-1" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
