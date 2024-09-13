import { useState } from 'react'
import './Blogs.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as needed
import Blogs_Banner from "./components/Blogs_Banner"; // Adjust the path as needed
import BlogContent from "./components/BlogContent"; // Adjust the path as needed
import Footer from "./components/Footer";
import SimilarBlogs from './components/SimilarBlogs';

function Blogs() {

  return (

        <div className="Blogs_Page">
          <Navbar/>    

          <Blogs_Banner/>
          <div className="blog_container">
                <BlogContent/>
                <SimilarBlogs/>
          </div>
          <Footer/>
        </div>
    

  )
}

export default Blogs

