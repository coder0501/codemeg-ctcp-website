import React from "react";
import "./Courses_HeroSection.css"; // Ensure you create this CSS file
import backButtonLeftArrow from "../../../assets/images/courses-back-button-leftarrow-icon.svg";
import courses_rightArrow from "../../../assets/images/courses-heroSection-rightArrow.svg";

const Courses_HeroSection = () => {
  return (
    <>
      <section className="courses-heroSection">
        <div className="courses-heroSection-container">
          <div className="courses-web-development-back-button">
            <img
              src={backButtonLeftArrow}
              className="courses-web-development-back-button-arrow-icon"
            />
            <span>BACK</span>
          </div>
          <div>
            <h2 className="heading">Web Development</h2>
            <p className="description">
              We are searching for interns to join our team at Codemeg Soft
              Solutions, which is rapidly expanding. Apply now to learn about
              the creative and website managing aspects of Web Development with
              Codemeg, including the fundamentals of interactive techniques such
              as website handling and backend development, such as Basic and
              Advanced Website Hosting. Learn how to create and manage websites
              and apps at the same time.
            </p>
          </div>
          <button className="get-quote-button">
            Get Quote <img src={courses_rightArrow} className="get-quote-button_backArrow"/>
          </button>
        </div>
      </section>
    </>
  );
};

export default Courses_HeroSection;
