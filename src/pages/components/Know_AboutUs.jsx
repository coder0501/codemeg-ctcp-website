import React from "react";
import "./Home_AboutUs.css";
import img1 from "../assets/images/Home_AboutUs1.jpg";
import img2 from "../assets/images/Home_AboutUs2.jpg";
import img3 from "../assets/images/Home_AboutUs2.jpg";
import img4 from "../assets/images/Home_AboutUs2.jpg";
import img5 from "../assets/images/Home_AboutUs2.jpg";

const Home_AboutUs = () => {
  return (
    <section className="home_about-us-section">
      <div className="home_about-us">
        <div className="home_about-us-container">
          <div className="home_about-us-image-content">
            <div className="home_about-us-images">
              <img
                src={img1}
                alt="Meeting"
                className="home_about-image large-image"
              />
            </div>
            <div className="home_about-us-content">
              <h2 className="home_about-title">Know About Us</h2>
              <p className="home_about-description">
                At <span className="highlight">Codemeg</span>, we are dedicated
                to guiding students and young professionals through a seamless
                transition from academia to the corporate world. With our
                branches located in Indore and Rewa, we provide high-quality,
                hands-on training designed to equip you with the skills and
                confidence needed for a successful career.
              </p>
            </div>
          </div>
          <div className="small-images">
            <img
              src={img2}
              alt="Teamwork"
              className="home_about-image about-image"
            />
            <img
              src={img3}
              alt="Discussion"
              className="home_about-image about-image"
            />
            <img
              src={img4}
              alt="Group"
              className="home_about-image about-image"
            />
            <img
              src={img5}
              alt="Work"
              className="home_about-image about-image"
            />
            <img
              src={img5}
              alt="Work"
              className="home_about-image about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_AboutUs;
