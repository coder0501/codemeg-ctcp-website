import React from "react";
import "./Course.css";
import php_img from "../../assets/images/php.png";
import get_course_icon from "../../assets/images/get_course_icon.svg";

const Course = ({ courseName }) => {
  return (
    <div className="course">
      <div className="course_duration">
        <h4>Duration</h4>
      </div>
      <div className="course_title_content">
        <div className="course_title">
          <h3>{courseName}</h3>
        </div>
        <div className="course_content">
          <div className="course_content_row">
            <p>Tech Stack</p>
            <div className="course_content_img">
              <img src={php_img} alt="course_content_img" />
              <img src={php_img} alt="course_content_img" />
              <img src={php_img} alt="course_content_img" />
              <img src={php_img} alt="course_content_img" />
              <img src={php_img} alt="course_content_img" />
            </div>
          </div>
          <div className="course_content_row">
            <p>Advance</p>
            <div className="course_content_img">
              <img src={php_img} alt="course_content_img" />
              <img src={php_img} alt="course_content_img" />
            </div>
          </div>
        </div>
      </div>
      <div className="get_course">
        <span className="get_course_icon">
          <img src={get_course_icon} alt="" />
        </span>
        <div className="get_course_title">
          <h4>Get Course</h4>
        </div>
      </div>
    </div>
  );
};

export default Course;
