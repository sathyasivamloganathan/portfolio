import React from "react";
import Project from "./Project";
import Title from "../../components/Title/Title";
import HomeLT from "../../assets/LT/homeLT.png"
import ServiceLT from "../../assets/LT/serviceLT.png";
import AdminPanelLT from "../../assets/LT/adminPanel.png";
import ReportLT from "../../assets/LT/reportLT.png";
import MyFoodFA from "../../assets/FitnessApp/FitnessApp MyFood Screen.png";
import SearchFA from "../../assets/FitnessApp/FitnessApp Search.png";
import SearchResult from "../../assets/FitnessApp/MyFood Search Result.png";

const ProjectsList = () => {
  const projectList = [
    {
      title: "Fitness App",
      date: "Current",
      description: [
        "Developed a data management system to track food consumption, calculate total calories, fat, and protein intake, and visualize the data using progress indicators.",
        "Designed interactive features allowing users to navigate between dates and view their food consumption history.",
        "Leveraged the Edamam API to process images captured by the camera, extracting detailed nutritional information such as calorie counts, macronutrient composition, and serving sizes",
      ],
      tech: "React Native | Express.js | Node.js | MongoDb",
      githubLink: "https://github.com/sathyasivamloganathan/FitnessApp",
      images: [MyFoodFA, SearchFA, SearchResult],
    },
    {
      title: "Intelligent Radiologist Assistant - Knee MRI (L&T)",
      date: "01/2024 - 03/2024",
      description: [
        "Played a keyrole in the development of a web application utilizing React.js and Flask as a backend with MongoDB integration, specifically designed to aid radiologists in analyzing knee MRIscans.",
        "Implemented secure login functionality for radiologists and users, and orchestrated automated report generation and delivery, resulting in a remarkable 75% reduction in analysis time.",
      ],
      tech: "React.js | Flask | MongoDb",
      githubLink: "https://github.com/sathyasivamloganathan/Project/tree/dev",
      demoLink:
        "https://drive.google.com/file/d/1Nf1IGfdPSa9JImfr0ii5v6lAa6E4JCKK/view?usp=drivesdk",
      images: [HomeLT, ServiceLT, AdminPanelLT, ReportLT],
    },
    {
      title: " E-Commerce Web App",
      date: "10/2023",
      description: [
        "Led the conceptualization and execution of an intuitive admin panel, empowering administrators to streamline product management processes.",
        "Employed React.js, Express.js, and MongoDB to architect robust database management solutions and crafted dynamic user interfaces, resulting in a seamless browsing experience that amplified user engagement.",
      ],
      tech: "React.js | Express.js | Node.js | MongoDb",
      githubLink: "https://github.com/sathyasivamloganathan/Ecommerce",
    },

    {
      title: "Anish Cashews",
      date: "01/2023",
      description: ["Developed a portfolio for the company Anish Cashews"],
      tech: "React.js | TailwindCss",
      githubLink: "https://github.com/Athithya-t/react",
      demoLink: "https://anishcashews.com",
    },
  ];

  return (
    <div className="bg-gray-200 py-12" id="project">
      <Title title="Projects" shadowColor="rgba(0, 0, 0, 0.3)" />
      <section className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-center align-middle items-center">
          {projectList.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              date={project.date}
              description={project.description}
              tech={project.tech}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              images={project.images}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsList;
