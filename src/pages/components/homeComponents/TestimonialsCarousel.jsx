import React, { useRef } from "react";
import "./TestimonialsCarousel.css";


import left_arrow from "../../../assets/images/left-arrow-icon.svg";
import right_arrow from "../../../assets/images/right-arrow-icon.svg";
// import profileIcon from "../assets/images/profile-icon.png"; 
import testimonial_img from "../../../assets/images/testimonial_img.png";

const testimonials = [
  {
    name: "Kamal Soni",
    location: "India, Indore",
    stars: 5,
    text: "Codemeg's training was a game-changer for me. The hands-on projects and real-world insights helped me transition smoothly from college to a fulfilling career in marketing. I couldn’t have asked for better guidance and support!",
  },
  {
    name: "Kamal Soni",
    location: "India, Indore",
    stars: 5,
    text: "Codemeg's training was a game-changer for me. The hands-on projects and real-world insights helped me transition smoothly from college to a fulfilling career in marketing. I couldn’t have asked for better guidance and support!",
  },
  {
    name: "Kamal Soni",
    location: "India, Indore",
    stars: 5,
    text: "Codemeg's training was a game-changer for me. The hands-on projects and real-world insights helped me transition smoothly from college to a fulfilling career in marketing. I couldn’t have asked for better guidance and support!",
  },
  // Add more testimonials as needed
];

const TestimonialsCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="home_students_testimonials">
        <div className="Students-testimonials-carousel-Container">
          <div className="testimonials-title_header">
            <h2 className="testimonials-title">TESTIMONIALS</h2>
            <div className="carousel-header">
              <div className="carousel-header-heading">
                <h3 className="carousel-header-title">WHAT OUR STUDENTS SAY</h3>
                <span className="total-reviews">
                  Total Reviews <strong>26</strong>
                </span>
              </div>
              <div className="carousel-btn-controls">
                <div className="carousel-controls">
                  <button className="arrow-button" onClick={scrollLeft}>
                    <img src={left_arrow} alt="left-arrow" />
                  </button>
                  <button className="arrow-button" onClick={scrollRight}>
                    <img src={right_arrow} alt="right-arrow" />
                  </button>
                </div>
                <button className="view-all-button">
                  View All Testimonials &#8594;
                </button>
              </div>
            </div>
          </div>
          <div className="testimonial-carousel-container" ref={carouselRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="card-header">
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                    <div className="stars">
                      {Array.from({ length: testimonial.stars }, (_, i) => (
                        <span key={i}>&#9733;</span>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial_img">
                    <img src={testimonial_img} alt="testimonial_img" />
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
