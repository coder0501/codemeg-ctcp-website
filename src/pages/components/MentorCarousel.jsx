import React, { useState, useRef } from "react";
import "./MentorCarousel.css"; // External CSS
import mentor_img1 from "../../assets/images/mentors_img1.png";
import mentor_img2 from "../../assets/images/mentors_img2.png";
import mentor_img3 from "../../assets/images/mentors_img3.png";
import mentor_img4 from "../../assets/images/mentors_img4.png";
import mentor_img5 from "../../assets/images/mentors_img5.png";

const mentors = [
  {
    name: "Chandran Patel",
    title: "Sr. UX Designer",
    image: mentor_img1,
  },
  {
    name: "Chandran Patel",
    title: "Sr. UX Designer",
    image: mentor_img2,
  },
  {
    name: "Chandran Patel",
    title: "Sr. UX Designer",
    image: mentor_img3,
  },
  {
    name: "Chandran Patel",
    title: "Sr. UX Designer",
    image: mentor_img4,
  },
  {
    name: "Chandran Patel",
    title: "Sr. UX Designer",
    image: mentor_img5,
  }
];

const MentorCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const carouselRef = useRef(null);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleLeave = () => {
    setActiveIndex(null);
  };

  const handleMouseMove = (e) => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const scrollX = (e.clientX / window.innerWidth) * maxScrollLeft;
    carousel.scrollTo({
      left: scrollX,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="section_home_top_mentors"
      onMouseMove={handleMouseMove} // Add mouse move for scrolling
    >
      <div className="home_top_mentors">
        <div>
          <div className="learn_from_top_mentors-container" ref={carouselRef}>
            <div className="learn_from_top_mentors_heading">
              <h1 className="learn_from_top_mentors-title">Learn from the</h1>
              <span className="highlight_title">Top Mentors in Codemeg...</span>
            </div>
            <div className="learn_from_top_mentors">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className={`learn_from_top_mentors-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleLeave}
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="learn_from_top_mentors-image"
                  />
                  <div
                    className={`learn_from_top_mentors-info ${
                      index === activeIndex ? "visible" : ""
                    }`}
                  >
                    <h3>{mentor.name}</h3>
                    <p>{mentor.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorCarousel;
