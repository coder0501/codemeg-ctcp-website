import React, { useState } from "react";
import Course from "./Course";
import "./Our_Courses.css";

const Our_Courses = () => {
  const [completedIndex, setCompletedIndex] = useState(null); // track clicked course
  const courseName = "Web Development";

  // Handle when a course is clicked
  const handleCourseClick = (index) => {
    setCompletedIndex(index);
    console.log(`Course ${index + 1} clicked`);
  };

  // Helper function to conditionally apply timeline styles
  const isCompleted = (index) => {
    return completedIndex !== null && index <= completedIndex;
  };

  return (
    <section>
      <div className="home_courses">
        <div className="home_courses_container">
          <div className="courses_heading_text">
            <h1 className="courses_heading">
              Our <span className="highlight_title">Courses</span>
            </h1>
            <p className="courses_text_p">
              Unlock the skills you need to succeed with our diverse course
              offerings. From in-demand tech programs to essential business
              skills, our courses are designed to help you achieve your career
              goals.{" "}
            </p>
          </div>

          <div className="courses_list">
            {/* Alternate between course and blank space */}
            {[1, 2, 3, 4].map((_, index) => (
              <div className="courses_list_row" key={index}>
                {index % 2 === 0 ? (
                  <>
                    {/* Course Card first in even rows */}
                    <Course
                      courseName={courseName}
                      className="courses_list course"
                      onClick={() => handleCourseClick(index)} // Click event for course
                    />
                    {/* Timeline component */}
                    <div className="timeline">
                      <div
                        className={`timeline_line ${
                          isCompleted(index) ? "highlighted" : ""
                        }`}
                      />
                    </div>
                    <div className="blank_space"> </div>
                  </>
                ) : (
                  <>
                    {/* Blank space first in odd rows */}
                    <div className="blank_space"></div>
                    <div className="timeline">
                      <div
                        className={`timeline_line ${
                          isCompleted(index) ? "highlighted" : ""
                        }`}
                      />
                    </div>
                    <Course
                      courseName={courseName}
                      className="courses_list course"
                      onClick={() => handleCourseClick(index)} // Click event for course
                    />
                  </>
                )}
              </div>
            ))}
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
