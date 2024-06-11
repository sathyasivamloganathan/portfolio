import React from "react";

const AchievementItem = ({
  title,
  description,
  competition,
  date,
  image,
  isImageLeft,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center lg:items-start w-full`}
    >
      <div className="lg:w-1/2 w-full h-full flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2 w-full lg:px-8 mt-6 lg:mt-0 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-lg text-gray-600 mb-2 italic">{competition}</p>
        <p className="text-md text-gray-500 mb-4">{date}</p>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AchievementItem;
