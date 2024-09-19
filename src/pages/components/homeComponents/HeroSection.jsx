import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="Home_HeroSection">
      <div className="home-hero-section">
        <div className="hero_section_container">
          <div className="placement-badge">
            123 Successful Placements Achieved ✨
            {/* <span className="badge-icon">🌟</span> */}
          </div>
          <h1 className="hero-heading">
            
            <div className="hero-heading-text">
             <span>“</span>Kickstart Your Career with Codemeg's Training Program<span>”</span>
            </div>
            
          </h1>
          <p className="hero-subheading">
            – Bridge the Gap Between Learning and Earning –
          </p>
          <div className="hero-buttons">
            <button className="discover-courses-btn">
              Discover Our Courses <span className="double-arrow">»</span>
            </button>
            <button className="join-us-btn">Join Us Today</button>
          </div>
          <div className="stats-container">
            <div className="stat-box">
              <h2>13+</h2>
              <p>Trending Courses</p>
            </div>
            <div className="stat-box">
              <h2>90%</h2>
              <p>Placement rate</p>
            </div>
            <div className="stat-box">
              <h2>45+</h2>
              <p>Learners</p>
            </div>
            <div className="stat-box">
              <h2>24/7</h2>
              <p>Consultancy Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
