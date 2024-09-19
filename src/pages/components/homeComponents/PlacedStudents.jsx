import React, { useState } from "react";
import "./PlacedStudents.css"; // Importing CSS
import placedstudents_img from "../../../assets/images/placedstudents_img.png";
import placedstudents_sofwave from "../../../assets/images/placed_students_sofwaveImg.png";

const PlacedStudents = () => {
  // Carousel state to track active slide
  const [currentIndex, setCurrentIndex] = useState(2); // Center card starts active
  const totalSlides = 5; // Total number of slides

  // Function to handle sliding left and right
  const handleSlide = (direction) => {
    if (direction === "left") {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalSlides - 1);
    } else {
      setCurrentIndex(currentIndex < totalSlides - 1 ? currentIndex + 1 : 0);
    }
  };

  const handleHover = (index) => {
    setCurrentIndex(index);
  };
  // Rendering the component
  return (
    <section className="placed_students_section">
      <div className="placed-students">
        <div className="placed-students-container">
          <div>
            <h2 className="carousel-title">Placed Students</h2>
          </div>
          <div className="carousel-wrapper">
            {/* Students' Cards */}
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div className="carousel-main">
                <div
                  key={index}
                  className={`carousel-card ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onMouseEnter={() => handleHover(index)}
                  style={{
                    filter: index === currentIndex ? "none" : "grayscale(100%)",
                  }} // Center card not blended
                >
                  {/* <div className="sofwave-logo"> */}
                  <span className="sofwave-text">
                    <img src={placedstudents_sofwave} alt="" />
                  </span>
                  {/* </div> */}
                  <div className="image-placeholder">
                    {/* Space for image path */}
                    <img src={placedstudents_img} alt="Student" />
                  </div>
                  <div className="student-info">
                    <p className="student-name">Deepak Sharma</p>
                    <p className="student-role">
                      <span className="highlight_title">UI/UX Designer </span>{" "}
                      at Sofwavetech
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active-dot" : ""}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacedStudents;
