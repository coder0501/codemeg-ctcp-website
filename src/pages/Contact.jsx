import { useState } from 'react'
import './Contact.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as needed
import Contact_HeroSection from './components/Contact_HeroSection';
import ContactForm from './components/ContactForm';
import Footer from "./components/Footer";


const Contact = () => {
    return (
        <div className="Contact_Page">
          <Navbar/>
          <Contact_HeroSection/>

          <div className="contact-container">
            <ContactForm/>
          </div>

          <Footer/>

        </div>
    );      
};

export default Contact;