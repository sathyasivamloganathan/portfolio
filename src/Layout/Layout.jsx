import React from "react"
import Header from "../components/Header/Header"
// import Footer from  "../components/Footer/Footer"
import Homepage from "../pages/Homepage"
import About from "../pages/About"
import Skills from "../pages/Skills"
import ProjectsList from "../pages/Project/ProjectsList"
import AchievementsList from "../pages/Achievements/AchievementsList"
import Education from "../pages/Education"
import ContactUs from "../pages/ContactUs"

const Layout = () => {

  // const[count, setCount] = useState(5);
  // const Loader = () => {
  //   useEffect(() => {
  //     const interval = setTimeout(() => {
  //       setCount(count-1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);
  //   return (
  //     <div className="loader">
  //       <div className="animate"></div>
  //     </div>
  //   );
  // }

  return (
    <>
      {/* {count ==0 ? (
        <Loader />
      ) : (/
        <>
          <Header />
          <Homepage />
          <About />
          <Education />
          <Skills />
          <ProjectsList />
          <AchievementsList />
          <ContactUs />
        </>
      )} */}
      <Header />
      <Homepage />
      <About />
      <Education />
      <Skills />
      <ProjectsList />
      <AchievementsList />
      <ContactUs />
    </>
  );
}

export default Layout