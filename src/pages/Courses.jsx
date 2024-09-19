import "./Courses.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Courses_HeroSection from "./components/coursesComponents/Courses_HeroSection"; // Adjust the path as needed
import Footer from "./components/common/Footer";
import Courses_YouWillLearn from "./components/coursesComponents/Courses_YouWillLearn";

function Courses() {
  return (
    <div className="Courses_Page">
      <Navbar />
      <Courses_HeroSection />
      <Courses_YouWillLearn />
      <Footer />
    </div>
  );
}

export default Courses;
