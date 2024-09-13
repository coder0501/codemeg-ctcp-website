import React from "react";
import SimilarBlogs from "./SimilarBlogs";
import topRightArrow from "../../assets/images/OurBlogs_arrow_icon.svg";
import "./Home_OurBlogs.css";

const Home_OurBlogs = () => {
  return (
    <section className="Home_OurBlogsSection">
      <div className="Home_OurBlogs">
        <div className="ourBlog_container">
          <div className="OurBlog_title_icon_text">
            <div className="OurBlog_BgImg">
              <div className="OurBlog_title_icon">
                <h1>Our Latest Blogs</h1>
                <img src={topRightArrow} alt="topRightArrow" />
              </div>
            </div>
            <p>
              <span className="highlight_title">“</span>At Codemeg, we believe
              in continuous learning and staying updated with the latest
              industry trends.<span className="highlight_title">”</span>
            </p>
          </div>
        </div>
      </div>
      <SimilarBlogs />
    </section>
  );
};

export default Home_OurBlogs;
