import { useState } from "react";
import "./Contact.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Contact_HeroSection from "./components/contact/Contact_HeroSection";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/common/Footer";

const Contact = () => {
  return (
    <div className="Contact_Page">
      <Navbar />
      <Contact_HeroSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
