import React from "react";
import "./Contact_HeroSection.css";

const Contact_HeroSection = () => {
  return (
    <section className="contact-page">
      <div className="contact-heroSection">
        <div className="">
          <div className="contact-heroSection-main">
            <div className="contact-header">
              <h2>
                Contact Codemeg for all your IT needs. Your one-stop solution!
              </h2>
              <p>
                Contact Codemeg for all your IT needs. Your one-stop solution!
              </p>
            </div>
            <div className="contact-locations">
              <div className="contact-locations-container">
                <div className="contact-locations-main">
                  <div className="location">
                    <div className="location-detail1">
                      <h3>Codemeg Soft, INDIA</h3>
                      <div className="location-detail">
                        <div className="location-item">
                          <i className="fas fa-map-marker-alt icon-orange"></i>
                          <span className="badge">HEADQUARTER</span>
                        </div>
                        <div className="location-item">
                          <i className="fas fa-map-marker-alt icon-orange"></i>
                          <p>
                            71, Behind C21 Mall, Scheme 54 PU4, Indore, Madhya
                            Pradesh, India
                          </p>
                        </div>
                        <div className="location-item">
                          <i className="fas fa-map-marker-alt icon-orange"></i>
                          <p>
                            3rd Floor, Badrika Tower, Near Sirmaur Chauraha,
                            Khutehi, Rewa, Madhya Pradesh, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vertical-line"></div>
                  <div className="location">
                    <div className="location-detail2">
                      <h3>Codemeg Soft, UK</h3>
                      <div className="location-item">
                        <i className="fas fa-map-marker-alt icon-orange"></i>
                        <p>42-44 Bishopsgate, London, England, EC2N 4AH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="horizontal-line"></div> */}
            <div className="contact-query">
              <h4>Raise your query:</h4>
              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fas fa-whatsapp"></i>
                  <span>+91 80857 65844</span>
                </div>
                <div className="contact-method">
                  <i className="fas fa-envelope"></i>
                  <span>business@codemeg.com</span>
                </div>
                <div className="contact-method">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="contact-method">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="contact-method">
                  <i className="fab fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_HeroSection;

// return (
//     <section className="contact-section">
//       <div className="contact-header">
//         <h2>Contact Codemeg for all your IT needs. Your one-stop solution!</h2>
//         <p>Contact Codemeg for all your IT needs. Your one-stop solution!</p>
//       </div>
//       <div className="contact-locations">
//         <div className="location">
//           <h3>Codemeg Soft, INDIA</h3>
//           <div className="location-detail">
//             <div className="location-item">
//               <i className="fas fa-map-marker-alt icon-orange"></i>
//               <span className="badge">HEADQUARTER</span>
//             </div>
//             <div className="location-item">
//               <i className="fas fa-map-marker-alt icon-orange"></i>
//               <p>71, Behind C21 Mall, Scheme 54 PU4, Indore, Madhya Pradesh, India</p>
//             </div>
//             <div className="location-item">
//               <i className="fas fa-map-marker-alt icon-orange"></i>
//               <p>3rd Floor, Badrika Tower, Near Sirmaur Chauraha, Khutehi, Rewa, Madhya Pradesh, India</p>
//             </div>
//           </div>
//         </div>
//         <div className="vertical-line"></div>
//         <div className="location">
//           <h3>Codemeg Soft, UK</h3>
//           <div className="location-item">
//             <i className="fas fa-map-marker-alt icon-orange"></i>
//             <p>42-44 Bishopsgate, London, England, EC2N 4AH</p>
//           </div>
//         </div>
//       </div>
//       <div className="horizontal-line"></div>
//       <div className="contact-query">
//         <h4>Raise your query:</h4>
//         <div className="contact-methods">
//           <div className="contact-method">
//             <i className="fas fa-whatsapp"></i>
//             <span>+91 80857 65844</span>
//           </div>
//           <div className="contact-method">
//             <i className="fas fa-envelope"></i>
//             <span>business@codemeg.com</span>
//           </div>
//           <div className="contact-method">
//             <i className="fab fa-instagram"></i>
//           </div>
//           <div className="contact-method">
//             <i className="fab fa-twitter"></i>
//           </div>
//           <div className="contact-method">
//             <i className="fab fa-linkedin"></i>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
