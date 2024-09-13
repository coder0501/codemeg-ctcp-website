import React from "react";
import Course from "./Course";
import "./Our_Courses.css";

const Our_Courses = () => {

  const courseName = "Web Development";

  return (
    <section>
      <div className="home_courses">
        <div className="home_courses_container">
          <div className="courses_heading_text">
            <h1 className="courses_heading">Our <span className="highlight_title">Courses</span></h1>
            <p className="courses_text_p">
              Unlock the skills you need to succeed with our diverse course
              offerings. From in-demand
            </p>
            <p>
              tech programs to essential business skills, our courses are
              designed
            </p>
            <p>to help you achieve your career goals.</p>
          </div>
          <div className="courses_list">
            <div className="courses_list_row1">
              <Course courseName={courseName} className="courses_list course" />
              <div className="blank_space"></div>
            </div>
            <div className="courses_list_row1">
              <div className="blank_space"></div>
              <Course courseName={courseName} className="courses_list course" />
            </div>
            <div className="courses_list_row1">
              <Course courseName={courseName} className="courses_list course" />
              <div className="blank_space"></div>
            </div>
            <div className="courses_list_row1">
              <div className="blank_space"></div>
              <Course courseName={courseName} className="courses_list course" />
            </div>
          </div>
          <div className="view_all_courses">
            <button className="view_all_courses_btn">View all Courses</button>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default Our_Courses;
