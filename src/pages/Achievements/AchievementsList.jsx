// import React from "react";
// import ACCS from '../../assets/certificates/Accs.png'
// import Title from "../../components/Title/Title";

// const Achievements = () => {
//   return (
//     <div>
//       <Title title="Achievements" />
//       <div className="grid grid-rows-3 gap-4 p-4">
//         {/* Achievement 1 */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//           <div className="p-4">
//             <img
//               src={ACCS}
//               alt="Achievement 1"
//               className="w-[100px] h-auto"
//             />
//           </div>
//           <div className="bg-gray-200 p-4 flex flex-col justify-center">
//             <h3 className="text-xl font-bold">
//               {" "}
//               L&T TECHGIUM 7TH EDITION SEMI-FINALIST
//             </h3>
//             <p className="text-gray-700">
//               Recognized as a semi finalist in the prestigious L&T Techgium
//               competition.
//             </p>
//             <p className="text-gray-700">
//               Delivered a compelling demo presentation of the project,
//               showcasing the application’s capabilities and impact on
//               radiological workflows.
//             </p>
//             <p className="text-gray-500">Date: 09/2023-02/2024</p>
//           </div>
//         </div>

//         {/* Achievement 2 */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//           <div className="p-4">
//             <img
//               src={ACCS}
//               alt="Achievement 2"
//               className="w-[100px] h-auto"
//             />
//           </div>
//           <div className="bg-gray-200 p-4 flex flex-col justify-center">
//             <h3 className="text-xl font-bold">
//               ADVANCED COMPUTING AND COMMUNICATIONS SOCIETY FINALISTS (ACCS)
//             </h3>
//             <p className="text-gray-700">
//               Achieved top 10 finalist position, outperforming competitors from
//               prestigious colleges nationwide.
//             </p>
//             <p className="text-gray-700">
//               Cleared 2 rounds, advanced to the final round, and presented project to a panel of judges at IIIT Bangalore.
//             </p>
//             <p className="text-gray-500">Date: 03/2023</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;



// import React from "react";
// import ACCS from "../../assets/certificates/Accs.png";
// import LTT1 from "../../assets/certificates/Sathyam_Sivam_Loganathan_L&T.jpg"; // Add additional images
// import LTT2 from "../../assets/certificates/Screenshot (8).png"; // Add additional images
// import LTT3 from "../../assets/certificates/Screenshot (9).png"; // Add additional images
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Title from "../../components/Title/Title";

// const Achievements = () => {
//   return (
//     <div className="bg-gradient-to-b from-purple-500 to-pink-500 py-8">
//       <Title title="Achievements" />
//       <div className="grid gap-8 p-4">
//         {/* Achievement 1 */}
//         <div className="grid lg:grid-cols-2 gap-6 rounded-lg overflow-hidden shadow-lg">
//           <div className="bg-white p-6 flex flex-col justify-center">
//             <h3 className="text-2xl font-bold mb-2 text-gray-800">
//               L&T TECHGIUM 7TH EDITION SEMI-FINALIST
//             </h3>
//             <p className="text-gray-700 mb-2">
//               Recognized as a semi-finalist in the prestigious L&T Techgium
//               competition.
//             </p>
//             <p className="text-gray-700 mb-2">
//               Delivered a compelling demo presentation of the project,
//               showcasing the application’s capabilities and impact on
//               radiological workflows.
//             </p>
//             <p className="text-gray-500">Date: 09/2023-02/2024</p>
//           </div>
//           <div className="flex items-center justify-center p-4">
//             <Carousel>
//               <div>
//                 <img
//                   src={LTT1}
//                   alt="Achievement 1 Image 1"
//                   className="w-64 h-auto rounded-lg"
//                 />
//               </div>
//               <div>
//                 <img
//                   src={LTT2}
//                   alt="Achievement 1 Image 2"
//                   className="w-64 h-auto rounded-lg"
//                 />
//               </div>
//               <div>
//                 <img
//                   src={LTT3}
//                   alt="Achievement 1 Image 3"
//                   className="w-64 h-auto rounded-lg"
//                 />
//               </div>
//             </Carousel>
//           </div>
//         </div>

//         {/* Achievement 2 */}
//         <div className="grid lg:grid-cols-2 gap-6 rounded-lg overflow-hidden shadow-lg">
//           <div className="flex items-center justify-center p-4">
//             <img
//               src={ACCS}
//               alt="Achievement 2"
//               className="w-70 h-auto rounded-lg"
//             />
//           </div>
//           <div className="bg-white p-6 flex flex-col justify-center">
//             <h3 className="text-2xl font-bold mb-2 text-gray-800">
//               ADVANCED COMPUTING AND COMMUNICATIONS SOCIETY FINALISTS (ACCS)
//             </h3>
//             <ul className="text-gray-700 mb-2 list-disc pl-5">
//               <li>
//                 Achieved top 10 finalist position, outperforming competitors
//                 from prestigious colleges nationwide.
//               </li>
//               <li>
//                 Cleared 2 rounds, advanced to the final round, and presented the
//                 project to a panel of judges at IIIT Bangalore.
//               </li>
//               <li>
//                 Team of 4 members designed a Smart Stick prototype model using
//                 Raspberry Pi microprocessor and tensorFlow Lite and utilized
//                 Object detection techniques to assist visually impaired
//                 individuals to navigate their surrounding safely with speech
//                 recognition to the user.
//               </li>
//             </ul>
//             <p className="text-gray-500">Date: 03/2023</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;


// import React from "react";
// import ACCS from "../../assets/certificates/Accs.png";
// import LTT1 from "../../assets/certificates/Sathyam_Sivam_Loganathan_L&T.jpg"; // Add additional images
// import LTT2 from "../../assets/certificates/Screenshot (8).png"; // Add additional images
// import LTT3 from "../../assets/certificates/Screenshot (9).png"; // Add additional images
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Title from "../../components/Title/Title";

// const Achievements = () => {
//   return (
//     <div className="bg-gradient-to-b from-blue-500 to-purple-500 py-8">
//       <Title title="Achievements" />
//       <div className="grid gap-8 p-4">
//         {/* Achievement 1 */}
//         <div className="grid lg:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-lg">
//           <div className="p-6 flex flex-col justify-center">
//             <h3 className="text-2xl font-bold mb-2 text-gray-800">
//               L&T TECHGIUM 7TH EDITION SEMI-FINALIST
//             </h3>
//             <p className="text-gray-700 mb-2">
//               Recognized as a semi-finalist in the prestigious L&T Techgium
//               competition.
//             </p>
//             <p className="text-gray-700 mb-2">
//               Delivered a compelling demo presentation of the project,
//               showcasing the application’s capabilities and impact on
//               radiological workflows.
//             </p>
//             <p className="text-gray-500">Date: 09/2023-02/2024</p>
//           </div>
//           <div className="flex items-center justify-center p-4">
//             <Carousel>
//               <div>
//                 <img
//                   src={LTT1}
//                   alt="Achievement 1 Image 1"
//                   className="w-64 h-auto rounded-lg"
//                 />
//               </div>
//               <div>
//                 <img
//                   src={LTT2}
//                   alt="Achievement 1 Image 2"
//                   className="w-64 h-auto rounded-lg"
//                 />
//               </div>
//               <div>
//                 <img
//                   src={LTT3}
//                   alt="Achievement 1 Image 3"
//                   className="w-64 h-auto rounded-lg"
//                 />
//               </div>
//             </Carousel>
//           </div>
//         </div>

//         {/* Achievement 2 */}
//         <div className="grid lg:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-lg">
//           <div className="flex items-center justify-center p-4">
//             <img
//               src={ACCS}
//               alt="Achievement 2"
//               className="w-70 h-auto rounded-lg"
//             />
//           </div>
//           <div className="p-6 flex flex-col justify-center">
//             <h3 className="text-2xl font-bold mb-2 text-gray-800">
//               ADVANCED COMPUTING AND COMMUNICATIONS SOCIETY FINALISTS (ACCS)
//             </h3>
//             <ul className="text-gray-700 mb-2 list-disc pl-5">
//               <li>
//                 Achieved top 10 finalist position, outperforming competitors
//                 from prestigious colleges nationwide.
//               </li>
//               <li>
//                 Cleared 2 rounds, advanced to the final round, and presented the
//                 project to a panel of judges at IIIT Bangalore.
//               </li>
//               <li>
//                 Team of 4 members designed a Smart Stick prototype model using
//                 Raspberry Pi microprocessor and tensorFlow Lite and utilized
//                 Object detection techniques to assist visually impaired
//                 individuals to navigate their surrounding safely with speech
//                 recognition to the user.
//               </li>
//             </ul>
//             <p className="text-gray-500">Date: 03/2023</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;


import React from "react";
import ACCS from "../../assets/certificates/Accs.png";
import LTT1 from "../../assets/certificates/Sathyam_Sivam_Loganathan_L&T.jpg"; // Add additional images
import LTT2 from "../../assets/certificates/Screenshot (8).png"; // Add additional images
import LTT3 from "../../assets/certificates/Screenshot (9).png"; // Add additional images
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "../../components/Title/Title";

const Achievements = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700 text-white py-8">
      <Title title="Achievements" shadowColor="rgb(115 121 133)" />
      <div className="grid gap-8 p-4">
        {/* Achievement 1 */}
        <div className="grid lg:grid-cols-2 gap-6 rounded-lg overflow-hidden shadow-xl">
          <div className="p-6">
            <h3 className="text-3xl font-bold mb-4">
              L&T TECHGIUM 7TH EDITION SEMI-FINALIST
            </h3>
            <p className="text-gray-300 mb-4">
              Recognized as a semi-finalist in the prestigious L&T Techgium
              competition.
            </p>
            <p className="text-gray-300 mb-4">
              Delivered a compelling demo presentation of the project,
              showcasing the application’s capabilities and impact on
              radiological workflows.
            </p>
            <p className="text-gray-400">Date: 09/2023-02/2024</p>
          </div>
          <div className="flex items-center justify-center p-4">
            <Carousel>
              <div>
                <img
                  src={LTT1}
                  alt="Achievement 1 Image 1"
                  className="w-64 h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={LTT2}
                  alt="Achievement 1 Image 2"
                  className="w-64 h-auto rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={LTT3}
                  alt="Achievement 1 Image 3"
                  className="w-64 h-auto rounded-lg shadow-lg"
                />
              </div>
            </Carousel>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="grid lg:grid-cols-2 gap-6 rounded-lg overflow-hidden shadow-xl">
          <div className="flex items-center justify-center p-4">
            <img
              src={ACCS}
              alt="Achievement 2"
              className="w-70 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-3xl font-bold mb-4">
              ADVANCED COMPUTING AND COMMUNICATIONS SOCIETY FINALISTS (ACCS)
            </h3>
            <ul className="text-gray-300 mb-4 list-disc pl-5">
              <li>
                Achieved top 10 finalist position, outperforming competitors
                from prestigious colleges nationwide.
              </li>
              <li>
                Cleared 2 rounds, advanced to the final round, and presented the
                project to a panel of judges at IIIT Bangalore.
              </li>
              <li>
                Team of 4 members designed a Smart Stick prototype model using
                Raspberry Pi microprocessor and TensorFlow Lite and utilized
                Object detection techniques to assist visually impaired
                individuals to navigate their surroundings safely with speech
                recognition for the user.
              </li>
            </ul>
            <p className="text-gray-400">Date: 03/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
