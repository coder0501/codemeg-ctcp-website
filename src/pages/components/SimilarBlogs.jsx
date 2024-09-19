import React, { useRef, useState } from "react";
import "./SimilarBlogs.css";
import image from "../../assets/images/similar-blogs-img.jpg";

const images = [image, image, image, image, image];
const SimilarBlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleDragStart = (e) => {
    carouselRef.current.startX = e.clientX;
  };

  const handleDragEnd = (e) => {
    const { startX } = carouselRef.current;
    const endX = e.clientX;

    if (startX > endX + 50 && currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else if (startX < endX - 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section> 
      <div
        className="blogs_carousel-container"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
      >
        
        <div className="blogs_carousel-heading">
          <h3>Similar Blogs</h3>
        </div>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Carousel ${index}`} />
              <div className="carousel-caption">
                <h3>
                  <span className="highlight_card_title">
                    Career Development
                  </span>
                </h3>
                <p>
                  5 Essential Soft Skills Every Graduate Needs for Corporate
                  Success
                </p>
                <a href="#">READ BLOG →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarBlogs;
