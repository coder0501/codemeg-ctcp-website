import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/codemeg_logo1.svg"; // Replace with the actual path to your logo image
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <section>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Codemeg Logo" className="logo" />
          <span className="ctcp">(CTCP)</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li
            className={`nav-item ${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </li>
          <li
            className={`nav-item courses-item ${
              activeTab === "Courses" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Courses")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="courses-container">
              Courses <span className="new-badge">NEW</span>
              {isDropdownOpen && (
                <div className="dropdown">
                  <div className="dropdown-item">
                    <p>
                      Web Development{" "}
                      <span className="dropdown-desc">
                        PHP, Mango DB, MySql
                      </span>
                    </p>

                    <FaArrowRight className="arrow-icon" />
                  </div>
                  <div className="dropdown-item">
                    App Development <FaArrowRight className="arrow-icon" />
                    <span className="dropdown-desc">PHP, Mango DB, MySql</span>
                  </div>
                  <div className="dropdown-item">
                    Frontend Development <FaArrowRight className="arrow-icon" />
                    <span className="dropdown-desc">PHP, Mango DB, MySql</span>
                  </div>
                  <div className="dropdown-item">
                    UI/UX & Graphic Designer{" "}
                    <FaArrowRight className="arrow-icon" />
                    <span className="dropdown-desc">
                      Figma, Adobe Illustrator, Photoshop
                    </span>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li
            className={`nav-item ${activeTab === "Blogs" ? "active" : ""}`}
            onClick={() => setActiveTab("Blogs")}
          >
            Blogs
          </li>
          <li
            className={`nav-item ${activeTab === "About Us" ? "active" : ""}`}
            onClick={() => setActiveTab("About Us")}
          >
            About Us
          </li>
          <li
            className={`nav-item ${activeTab === "Contact" ? "active" : ""}`}
            onClick={() => setActiveTab("Contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
