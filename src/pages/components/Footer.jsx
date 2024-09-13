import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import logo from "../../assets/images/codemeg_logo1.svg"; // Replace with the actual path to your logo image
import twitter from "../../assets/images/footer-twitter-icon.svg"; // Replace with the actual path to your logo image
import linkedin from "../../assets/images/footer-linkedin-icon.svg"; // Replace with the actual path to your logo image
import facebook from "../../assets/images/footer-facebook-icon.svg"; // Replace with the actual path to your logo image

const Footer = () => {
  return (
    <section>
      <footer className="footer">
        <div className="footer_container">
          <div>
              <div className="footer-top">
                <div className="footer-logo">
                  <img src={logo} alt="Codemeg Logo" className="footer-logo-image" />
                  <span className="ctcp">(CTCP)</span>
                </div>
                <ul className="footer-links">
                  <li>Home</li>
                  <li>Courses</li>
                  <li>Blog</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
                <div className="footer-social">
                  <img src={facebook} alt="Codemeg Logo" className="social-icon" />

                  <img src={twitter} alt="Codemeg Logo" className="social-icon" />

                  <img src={linkedin} alt="Codemeg Logo" className="social-icon" />
                  {/* <div className="social-icon"><FaFacebookF /></div>
                  <div className="social-icon"><FaTwitter /></div>
                  <div className="social-icon"><FaLinkedinIn /></div> */}
                </div>
              </div>
              {/* <hr className="footer-divider" /> */}
              <div className="footer-bottom">
                <div className="contact-info">
                  <div className="contact-info-content">
              
                    <MdEmail className="footer-icon" /> codemegctcp.com
                  </div>
                  <div className="contact-info-content">

                    <IoMdCall className="footer-icon" /> +91 99999 99999
                  </div>
                  <div className="contact-info-content">

                    <MdLocationOn className="footer-icon" /> Somewhere in Indore
                  </div>
                </div>
                <div className="footer-copyright">
                  © 2024 codemegctcp. All rights reserved.
                </div>
                {/* <div className="contact-info">
                </div>
                <div className="contact-info">
                </div> */}
              </div>
          </div>
        </div>
      </footer>

    </section>
  );
};

export default Footer;
