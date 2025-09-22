import React from 'react';
import '../components/style.css';
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>Our Home Services</h2>
      <p>
        Welcome! We connect you with trusted professionals for all your home service needs:
        cleaning, plumbing, electrical work, and more.
      </p>

      <div className="about-grid">
        {/* Cleaning Service */}
        <Link to="/mobiles"> {/* You can link to your cleaning services page */}
          <div className="about-item">
            <img src="https://via.placeholder.com/150?text=Cleaning+Service" alt="Cleaning Service" />
            <h3>House Cleaning</h3>
            <p>Professional house cleaning services for sparkling clean homes.</p>
          </div>
        </Link>

        {/* Plumber */}
        <Link to="/laptops"> {/* Link to plumbing services page */}
          <div className="about-item">
            <img src="https://via.placeholder.com/150?text=Plumber" alt="Plumber" />
            <h3>John Doe</h3>
            <p>Plumbing services | Mobile: +91 9876543210</p>
          </div>
        </Link>

        {/* Electrician */}
        <Link to="/laptops">
          <div className="about-item">
            <img src="https://via.placeholder.com/150?text=Electrician" alt="Electrician" />
            <h3>Jane Smith</h3>
            <p>Electrical services | Mobile: +91 9123456780</p>
          </div>
        </Link>

        {/* Sofa / Carpet Cleaning */}
        <Link to="/mobiles">
          <div className="about-item">
            <img src="https://via.placeholder.com/150?text=Sofa+Cleaning" alt="Sofa Cleaning" />
            <h3>Bob Johnson</h3>
            <p>Sofa & Carpet Cleaning | Mobile: +91 9988776655</p>
          </div>
        </Link>

        {/* Gardening */}
        <Link to="/laptops">
          <div className="about-item">
            <img src="https://via.placeholder.com/150?text=Gardening" alt="Gardening" />
            <h3>Alice Brown</h3>
            <p>Gardening & Landscaping | Mobile: +91 9871234560</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
