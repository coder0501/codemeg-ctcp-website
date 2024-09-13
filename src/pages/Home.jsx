import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HomePage_AboutUs from "./components/HomePage_AboutUs";
import CompanyCarousel from "./components/CompanyCarousel";
import WhyChooseCodemeg from "./components/WhyChooseCodemeg";
import Features from "./components/Features";
import Our_Courses from "./components/Our_Courses";
import PlacedStudents from "./components/PlacedStudents";
import Footer from "./components/Footer";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import MentorCarousel from "./components/MentorCarousel";
import Home_OurBlogs from "./components/Home_OurBlogs";
import "./Home.css";

const Home = () => (

    <div className="home-page">
        <Navbar/>    
        <HeroSection />
        <div className="homepage_container">
           
            <HomePage_AboutUs />
            <CompanyCarousel/>
            <WhyChooseCodemeg/>

        </div>
        <Features/>
        <Our_Courses/>
        <PlacedStudents/>
        <TestimonialsCarousel/>
        <MentorCarousel/>
        <Home_OurBlogs/>
        <Footer/>
    </div>

);

export default Home;

{
  /* <div className="App"> */
}
{
  /* <Navbar /> */
}
{
  /* <Navbar/>
          <HeroSection/>
          <AboutUs/> */
}
{
  /* <Home_AboutUs/> */
}
{
  /* <MissionVision/>

          <WhyChooseCodemeg/>
          <Features />
          <CompanyCarousel />
          <TestimonialsCarousel />
          <Footer/> */
}
