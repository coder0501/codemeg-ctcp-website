import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"; // Adjust the path as needed
// import Features from "./components/Features";
// import CompanyCarousel from "./components/CompanyCarousel";
// import TestimonialsCarousel from "./components/TestimonialsCarousel";
// import Home_AboutUs from "./components/Home_AboutUs";
// import MissionVision from "./components/MissionVision";
// import HeroSection from "./components/HeroSection";
// import Footer from "./components/Footer";
// import WhyChooseCodemeg from "./components/WhyChooseCodemeg";
// import AboutUs from "./components/AboutUs";
import HomePage from "./pages/Home"
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <> 
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        {/* </div> */}
      </Router>
    </>
  )
}

export default App

