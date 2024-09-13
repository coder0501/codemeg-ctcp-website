import React from "react";
import './MissionVision.css';
import missionIcon from "../assets/images/mission-icon.png"; // Add the path to your mission icon
import visionIcon from "../assets/images/vision-icon.png"; // Add the path to your vision icon

const MissionVision = () => {
  return (
    
      <div className="mission-vision-container">
        <div className="mission-box">
          <h3 className="title">
            MISSION <img src={missionIcon} alt="Mission Icon" className="missionvision-icon" />
          </h3>
          <p className="content">
            Our mission is to bridge the gap between academic learning and professional expertise. We are committed to offering practical, industry-relevant training that empowers individuals to excel in their careers. Our goal is to cultivate a skilled workforce that is prepared to tackle real-world challenges and contribute effectively to their organizations.
          </p>
        </div>
        <div className="vision-box">
          <h3 className="title">
            VISION <img src={visionIcon} alt="Vision Icon" className="missionvision-icon" />
          </h3>
          <p className="content">
            We envision a world where every student and young professional has access to the resources and training necessary to achieve career excellence. By providing cutting-edge training and personalized support, we aim to become the leading provider of College-to-Corporate transition programs in India, transforming academic achievements into professional success.
          </p>
        </div>
      </div>
    
  );
};

export default MissionVision;
