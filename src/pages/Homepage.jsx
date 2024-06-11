import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Homepage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [texts] = useState([
    "Frontend Developer",
    "Fullstack Developer",
    "App Developer - React Native",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="home flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-[#414c5c] mb-4">Sathya Sivam L</h1>
      <p className="text-2xl font-semibold text-gray-500">
        <span style={{ color: "#2C5282" }}>I'm a</span> {texts[textIndex]}
      </p>
      <div className="mt-8 flex flex-row">
        <a
          href="https://github.com/sathyasivamloganathan"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaGithub className="mr-1 text-[40px] text-[#414c5c] hover:text-gray-900" />
        </a>
        <a
          href="https://www.linkedin.com/in/sathya-sivam-loganathan"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaLinkedin className="mr-1 text-[40px] text-[#414c5c] hover:text-gray-900" />
        </a>
        <a
          href="mailto:sathyasivamloganathan@gmail.com"
          className="mr-4"
        >
          <IoMdMail className="mr-1 text-[40px] text-[#414c5c] hover:text-gray-900" />
        </a>
      </div>
    </div>
  );
};

export default Homepage;
