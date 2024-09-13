import React from "react";
import "./Blogs_Banner.css";

const Blogs_Banner = () => {
  return (
    <section>
      <div className="blog-banner">
        <div className="container">
          <div className="blog-banner-main">
            <div className="blog-banner-back-button">
              <i className="blog-banner-arrow-icon">←</i>
              <span>BACK</span>
            </div>

            <div className="banner-container">
              <div className="banner-heading-container">
                <h1 className="banner-title">The Rise of Artificial </h1>
                <h1 className="banner-title">Intelligence in Tech life</h1>
              </div>
              <div className="icon-container">
                <div className="icon-box">
                  <i className="heart-icon">❤️</i>
                  <span>24.5k</span>
                </div>
                <div className="icon-box">
                  <i className="view-icon">👁️</i>
                  <span>24.5k</span>
                </div>
                <div className="icon-box">
                  <i className="share-icon">📤</i>
                  <span>24.5k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs_Banner;
