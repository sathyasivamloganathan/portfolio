import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Toggle = ({
  title,
  description,
  tech,
  githubLink,
  demoLink,
  images,
  setToggle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClose = () => {
    setToggle(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-2xl h-[80%] w-full mx-4 overflow-y-auto">
        <button
          onClick={handleClose}
          className="text-gray-600 hover:text-gray-900 absolute right-5 top-5"
        >
          <IoMdClose className="text-2xl" />
        </button>
        <div className="p-4 md:p-5 space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 border-gray-200 pb-3">
            {title}
          </h2>
          <p className="font-medium text-sm text-gray-500 uppercase tracking-wide">
            {tech}
          </p>

          {/* Carousel */}
          {images && (
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
              {images && images.length > 0 && (
                <>
                  <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
                  >
                    &#10094;
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>
          )}

          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            {description.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-8 space-x-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md transition duration-200 hover:bg-blue-600 hover:shadow-lg">
                GitHub
              </button>
            </a>
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-green-500 text-white py-3 rounded-md shadow-md transition duration-200 hover:bg-green-600 hover:shadow-lg">
                  Demo
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
