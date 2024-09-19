import React from "react";
import "./Courses_LearnSection.css"; // Create this CSS file for styling
import { FaCode } from "react-icons/fa"; // Import the icons from react-icons
import courses_arrow_back from "../../../assets/images/courses_arrow_back.svg";

const Courses_LearnSection = ({ courseImage }) => {
  return (
    <section>
      <div className="learn-section">
        <div className="learn-section-container">
          <div className="learn-content">
            <div className="learn-course-img">
              <img
                src={courseImage} // Replace with the actual path to your image
                alt="PHP Logo"
                className="learn-image"
              />
            </div>
            <div className="learn-text">
              <div className="learn-main-text">
                <div>
                  <h2 className="learn-title">PHP</h2>
                  <p className="learn-description">
                    PHP is an abbreviation for Hypertext Processor. PHP is a
                    server-side programming language that is used in web
                    development. It is open-source, which means you may download
                    and use it for free. Therefore, it is straightforward to
                    learn and use. The files have the extension '.php.'
                  </p>
                </div>
                <span>
                  <img src={courses_arrow_back} alt="course_back_arrow" />
                </span>
              </div>
              <div className="learn-list">
                <p>
                  <FaCode className="learn-icon" /> PHP can generate the dynamic
                  page content.
                </p>
                <p>
                  <FaCode className="learn-icon" /> PHP can collect form data.
                </p>
                <p>
                  <FaCode className="learn-icon" /> PHP can create, open, read,
                  write, delete and close files on the server.
                </p>
                <p>
                  <FaCode className="learn-icon" /> PHP can send and receive
                  cookies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses_LearnSection;
