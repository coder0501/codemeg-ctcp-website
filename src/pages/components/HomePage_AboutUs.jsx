import React from "react";
import "./HomePage_AboutUs.css";
import AboutUs_img from "../../assets/images/Home_AboutUs_img.png";

const HomePage_AboutUs = () => {
  return (
    <section>
      <div className="home-about-us">
        <div className="about-us-container">
          <div className="home-about-us-text-container">
            <h4>ABOUT US</h4>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="info-boxes">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <div className="info-box" key={index}>
                    <h2>50+ years</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="home-about-us-image-container">
            <div className="video-timer">02:00</div>
            <img src={AboutUs_img} alt="About Us" />
            <div className="play-button">
              <i className="play-icon">▶</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage_AboutUs;
