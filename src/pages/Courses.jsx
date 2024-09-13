import { useState } from 'react'
import './Courses.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as needed
import Courses_HeroSection from "./components/Courses_HeroSection"; // Adjust the path as needed
import Footer from "./components/Footer";
import Courses_LearnSection from "./components/Courses_LearnSection"
import phpCourse from "../assets/images/courses_learn_php.svg";

function Courses() {

  return (

        <div className="Courses_Page">
          <Navbar/>    

          <div className="courses-container">
            <Courses_HeroSection/>
            <div className="learn-section-title">
                <h4>You will learn:</h4>
            </div>
            <Courses_LearnSection courseImage={phpCourse}/>
            <Courses_LearnSection courseImage={phpCourse}/>
            <Courses_LearnSection courseImage={phpCourse}/>
            <Courses_LearnSection courseImage={phpCourse}/>
            <Courses_LearnSection courseImage={phpCourse}/>

          </div>
          <Footer/>

        </div> 

  )
}

export default Courses

