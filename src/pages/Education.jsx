// import React from "react";
// import Title from "../components/Title/Title";

// const Education = () => {
//   const educations = [
//     {
//       logo: "https://via.placeholder.com/64", // Replace with actual logo URL
//       collegeName: "Rajalakshmi Institute of Technology",
//       courseName: "BE - Electronics and Communication Engineering",
//       year: "2021 - 2025",
//     },
//     {
//       logo: "https://via.placeholder.com/64", // Replace with actual logo URL
//       collegeName: "Annai Veilankanni's Matriculation Higher Secondary School",
//       courseName: "Bio-Maths (Higher Secondary)",
//       year: "2019 - 2021",
//     },
//   ];
//   return (
//     <div className="flex items-center justify-center">
//       <div className="py-10">
//         <div className="max-w-5xl mx-5 lg:mx-auto md:mx-5">
//           <Title title={"Education"} shadowColor="rgba(0,0,0,0.3)"/>
//           <div className="space-y-8 mt-16">
//             {educations.map((education, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg p-6 flex items-center space-x-6"
//                 style={{
//                     boxShadow: "0 10px 15px -3px rgb(94 54 54 / 10%), 0 4px 6px -4px rgb(0 0 0 / 80%)",
//                 }}
//               >
//                 <img
//                   src={education.logo}
//                   alt={`${education.collegeName} logo`}
//                   className="w-16 h-16 rounded-full object-cover"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold">
//                     {education.collegeName}
//                   </h3>
//                   <p className="text-gray-600">{education.courseName}</p>
//                   <p className="text-gray-500">{education.year}</p>
//                   <p className="text-gray-500">{education.department}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

import React from "react";
import Title from "../components/Title/Title";

const Education = () => {
  const educations = [
    {
      logo: "https://via.placeholder.com/64", // Replace with actual logo URL
      collegeName: "Rajalakshmi Institute of Technology",
      courseName: "BE - Electronics and Communication Engineering",
      year: "2021 - 2025",
      department: "Electronics and Communication Engineering",
    },
    {
      logo: "https://via.placeholder.com/64", // Replace with actual logo URL
      collegeName: "Annai Veilankanni's Matriculation Higher Secondary School",
      courseName: "Bio-Maths (Higher Secondary)",
      year: "2019 - 2021",
      department: "Science",
    },
  ];
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="py-10 w-full">
        <div className="max-w-5xl mx-5 lg:mx-auto md:mx-5">
          <Title title={"Education"} shadowColor="rgba(0,0,0,0.3)" />
          <div className="mt-16 relative">
            <div className="absolute left-8 transform -translate-x-1/2 h-full border-l-4 border-gray-200"></div>
            {educations.map((education, index) => (
              <div key={index} className="mb-8 flex items-center w-full">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div
                    // src={education.logo}
                    // alt={`${education.collegeName} logo`}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white transition-all duration-500 ease-in-out animate-blinking-border bg-slate-800 shadow-md"
                  ></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-full ml-5 pr-8">
                  <div
                    className="bg-white rounded-lg p-6"
                    style={{
                      boxShadow:
                        "8px 9px 6px -1px rgb(83 51 51 / 10%), 0 2px 4px -2px rgb(0 0 0)",
                    }}
                  >
                    <h3 className="text-xl font-semibold">
                      {education.collegeName}
                    </h3>
                    <p className="text-gray-600">{education.courseName}</p>
                    <p className="text-gray-500">{education.year}</p>
                    <p className="text-gray-500">{education.department}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
