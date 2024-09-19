import React from "react";
import "./ContactForm.css";
import contactFormImg from "../../../assets/images/contact-form-img.jpg";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form">
        <div className="contact-form-container">
          <div className="form-image-container">
            <img src={contactFormImg} alt="Contact Us" />
          </div>
          <div className="form-container">
            <h2>Contact Form</h2>
            <p>
              Kindly Complete The Form Below To Share Your Thoughts With Us, And
              We Will Promptly Respond To Your Inquiries.
            </p>
            <form className="contact-form">
              <div className="form-row">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone <span className="required">*</span>
                  </label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="skype">Skype Id (Optional)</label>
                  <input type="text" id="skype" name="skype" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company (Optional)</label>
                  <input type="text" id="company" name="company" />
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="details">Requirement Details</label>
                <textarea id="details" name="details"></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
};

export default ContactForm;
