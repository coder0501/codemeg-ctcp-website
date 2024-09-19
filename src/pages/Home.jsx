import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import HeroSection from "./components/homeComponents/HeroSection";
import HomePage_AboutUs from "./components/homeComponents/HomePage_AboutUs";
import CompanyCarousel from "./components/homeComponents/CompanyCarousel";
import WhyChooseCodemeg from "./components/homeComponents/WhyChooseCodemeg";
import Features from "./components/homeComponents/Features";
import Our_Courses from "./components/homeComponents/Our_Courses";
import PlacedStudents from "./components/homeComponents/PlacedStudents";
import Footer from "./components/common/Footer";
import TestimonialsCarousel from "./components/homeComponents/TestimonialsCarousel";
import MentorCarousel from "./components/homeComponents/MentorCarousel";
import Home_OurBlogs from "./components/homeComponents/Home_OurBlogs";
import "./Home.css";

function Home() {
  return (
    <section>
      <div className="home-page">
        <Navbar />
        <HeroSection />
        <HomePage_AboutUs />
        <CompanyCarousel />
        <WhyChooseCodemeg />
        <Features />
        <Our_Courses />
        <PlacedStudents />
        <TestimonialsCarousel />
        <MentorCarousel />
        <Home_OurBlogs />
        <Footer />
      </div>
    </section>
  );
}

export default Home;
