import React from "react";
import Courses_LearnSection from "./Courses_LearnSection";
import phpCourse from "../../../assets/images/courses_learn_php.svg";

const Courses_YouWillLearn = () => {
  return (
    <section>
      <div className="Courses-YouWillLearn">
        <div className="learn-section-title">
          <h4>You will learn:</h4>
        </div>
        <Courses_LearnSection courseImage={phpCourse} />
        <Courses_LearnSection courseImage={phpCourse} />
        <Courses_LearnSection courseImage={phpCourse} />
        <Courses_LearnSection courseImage={phpCourse} />
        <Courses_LearnSection courseImage={phpCourse} />
      </div>
    </section>
  );
};

export default Courses_YouWillLearn;
