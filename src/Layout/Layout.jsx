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
  return (
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
  )
}

export default Layout