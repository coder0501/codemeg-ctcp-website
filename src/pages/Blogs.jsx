import { useState } from "react";
import "./Blogs.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Blogs_Banner from "./components/blogComponents//Blogs_Banner"; // Adjust the path as needed
import BlogContent from "./components/blogComponents/BlogContent"; // Adjust the path as needed
import Footer from "./components/common/Footer";
import SimilarBlogs from "./components/SimilarBlogs";

function Blogs() {
  return (
    <div className="Blogs_Page">
      <Navbar />
      <Blogs_Banner />
      <BlogContent />
      <SimilarBlogs />
      <Footer />
    </div>
  );
}

export default Blogs;
