import React, { useEffect } from "react";
import "./Features.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import the images
import awardIcon from "../../../assets/images/award.svg";
import teamIcon from "../../../assets/images/team.svg";
import lightningIcon from "../../../assets/images/lightning.svg";
import crownIcon from "../../../assets/images/crown.svg";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="home-features">
        <div className="features-container">
          <div className="features-item ">
            <div className="features-item-main">
              <div className="icon-container">
                <div className="features-icon">
                  <img src={awardIcon} alt="Icon 1" />
                </div>
                <div className="icon-container-heading" data-aos="fade-right">
                  <h2>Your Pathway to Professional Excellence</h2>
                </div>
              </div>
              <div className="features-item-text">
                <p>
                  Codemeg guides you from academic success to career excellence,
                  equipping you with the skills needed to thrive in the
                  corporate world.
                </p>
              </div>
            </div>
            <div className="features-item-main">
              <div className="icon-container">
                <div className="features-icon">
                  <img src={teamIcon} alt="Icon 2" />
                </div>
                <div className="icon-container-heading" data-aos="fade-left">
                  <h2>Empowering Your Career Journey</h2>
                </div>
              </div>
              <div className="features-item-text">
                <p>
                  We empower you with hands-on learning and personalized
                  support, ensuring you’re prepared to navigate and succeed in
                  your career.
                </p>
              </div>
            </div>
          </div>
          <div className="features-item features-item-row">
            <div className="features-item-main">
              <div className="icon-container">
                <div className="features-icon">
                  <img src={lightningIcon} alt="Icon 3" />
                </div>
                <div className="icon-container-heading" data-aos="fade-right">
                  <h2>Transforming Education into Employment</h2>
                </div>
              </div>
              <div className="features-item-text">
                <p>
                  Our industry-relevant training turns your academic knowledge
                  into practical skills, making you ready for the workplace from
                  day one.
                </p>
              </div>
            </div>
            <div className="features-item-main">
              <div className="icon-container">
                <div className="features-icon">
                  <img src={crownIcon} alt="Icon 4" />
                </div>
                <div className="icon-container-heading" data-aos="fade-left">
                  <h2>Unlock Your Full Potential with Codemeg</h2>
                </div>
              </div>
              <div className="features-item-text">
                <p>
                  Unlock new opportunities with Codemeg’s expert instructors and
                  comprehensive programs designed to help you achieve your
                  career goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
