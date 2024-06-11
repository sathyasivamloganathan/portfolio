import React from "react";
import ProfilePic from "../assets/profile-pic (1).png";
import Resume from "../assets/Resume/Sathya Sivam L_Resume.pdf";
const AboutSection = () => {
  return (
    <div className="mt-20" id="about">
      <h3 className="text-center text-[25px] font-bold">
        About <span className="text-gray-400">Me</span>{" "}
      </h3>

      <div className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg space-y-4 md:space-y-0 ml-5 mr-5">
        <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-lg">
          {/* <h2 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit.</h2>
          <h3 className="text-xl mb-4">Lorem ipsum dolor sit.</h3> */}
          <p className="text-gray-700 mb-4">
            A passionate software engineering student with a knack for crafting
            innovative solutions. Proficient in React.js, Tailwind CSS,
            Express.js, Flask, MongoDB, and React Query. Successfully completed
            projects including an Intelligent radiologist assistant(Knee Mri)
            utilizing React.js, TailwindCss, Flask, and MongoDB, resulting in a
            75% reduction in analysis time of radiologist. With a track record
            of solving over 200 problems on LeetCode, Coding Ninjas, and
            HackerRank using Java, dedicated to continuous learning and growth.
            Currently seeking internship and full-time opportunities to apply
            and expand skills. Let's connect and collaborate on exciting software
            development ventures!
          </p>
          <div className="flex mt-10 space-x-4">
            <a
              href={Resume}
              download
              className="border-2 border-gray-600 text-gray-600 py-2 px-4 rounded hover:bg-gray-600 hover:text-white transition duration-300 flex items-center space-x-2"
            >
              <span>Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-9.293a1 1 0 00-1.414 0L9 10.586V7a1 1 0 10-2 0v6a1 1 0 001 1h6a1 1 0 100-2h-3.586l1.293-1.293a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-[400px] p-4 m-5 lg:m-auto flex justify-center align-middle items-center">
          <img src={ProfilePic} alt="Description" className="rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
