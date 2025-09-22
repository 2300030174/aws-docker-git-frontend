import React from 'react';
import '../components/style.css';
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, Outlet } from "react-router-dom";
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13

const AboutUs = () => {
  return (
    <div className="about-container">
<<<<<<< HEAD
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
        <Link to="/laptops"> {/* You can link to service providers page */}
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

        {/* Additional Home Service */}
        <Link to="/laptops">
          <div className="about-item">
            <img src="https://via.placeholder.com/150?text=Gardening" alt="Gardening" />
            <h3>Alice Brown</h3>
            <p>Gardening & Landscaping | Mobile: +91 9871234560</p>
          </div>
=======
      <h2>About Our Electronic Store</h2>
      <p>
        Welcome to our E-Commerce platform, your one-stop shop for the latest and greatest in electronics!
        We specialize in high-quality products, including computers, mobiles, laptops, and accessories.
      </p>

      <div className="about-grid">
      <Link to="/computers">
        <div className="about-item">        
          <img src="computers.jpeg" alt="Computers" />
          <h3>Computers</h3>
          <p>Find the best computers for gaming, work, and personal use.</p>
        </div>
        </Link>

        <Link to="/mobiles">
        <div className="about-item">
          <img src="mobiles.jpeg" alt="Mobiles" />
          <h3>Mobiles</h3>
          <p>Latest smartphones from top brands at unbeatable prices.</p>
        </div>
        </Link>
        <Link to="/laptops">
        <div className="about-item">
          <img src="laptops.jpeg" alt="Laptops" />
          <h3>Laptops</h3>
          <p>Powerful laptops for professionals, students, and gamers.</p>
        </div>
        </Link>
        <Link to="/pendrives">
        <div className="about-item">
          <img src="accessories.jpg" alt="Accessories" />
          <h3>Accessories</h3>
          <p>Find the best accessories like pendrives, keyboards, and more.</p>
        </div>
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
        </Link>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AboutUs;
=======
export default AboutUs;
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
