import React, { useState } from 'react';
import './BlogContent.css'; // CSS file for styling

const BlogContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog-container">
      <h2 className="blog-title">Artificial Intelligence (AI)</h2>
      <p className={`blog-paragraph ${isExpanded ? 'expanded' : ''}`}>
        Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
      </p>
      <p className={`blog-paragraph ${isExpanded ? 'expanded' : ''}`}>
        Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.
      </p>
      <h2 className="blog-title">Predictive Analytics and Disease Prevention</h2>
      <p className={`blog-paragraph ${isExpanded ? 'expanded' : ''}`}>
        One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.
      </p>
      <button className="read-more-btn" onClick={handleToggle}>
        {isExpanded ? 'Show Less' : 'Read Full Blog'}
        <span className={`arrow ${isExpanded ? 'up' : 'down'}`}>&#x25BC;</span>
      </button>
    </div>
  );
};

export default BlogContent;
