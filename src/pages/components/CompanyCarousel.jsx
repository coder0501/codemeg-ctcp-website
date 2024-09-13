import React, { useRef } from "react";
import "./CompanyCarousel.css";
import awardIcon from "../../assets/images/Adobe.svg";

const CompanyCarousel = () => {
  const carouselRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const companies = [
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
    awardIcon,
  ];

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = "grabbing"; // change cursor when dragging
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current.style.cursor = "grab"; // revert cursor when dragging stops
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 3; // adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="company-carousel">
      <h2 className="carousel-title">Company <span className="highlight_title">Associated</span></h2>
      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="carousel-scroll">
          {companies.map((company, index) => (
            <div key={index} className="company-logo-container">
              <img src={company} alt="Company Logo" className="company-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
