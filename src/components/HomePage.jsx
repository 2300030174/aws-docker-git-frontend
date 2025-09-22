import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { FaUserCircle } from "react-icons/fa";
import "./style.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
<<<<<<< HEAD
        <h1>Home services</h1>
=======
        <h1>E-Commerce</h1>
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
        <div className="header-right">
          {isAuthenticated ? (
            <div className="profile-menu">
              <FaUserCircle
                className="profile-icon"
                size={28}
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="dropdown">
                  <Link to="/cart" onClick={() => setDropdownOpen(false)}>Cart</Link>
                  <Link to="/orders" onClick={() => setDropdownOpen(false)}>Orders</Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/signup"><button>Sign Up</button></Link>
            </>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/computers">repair services</Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/mobiles" : "/login"}>cleaning services</Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/laptops" : "/login"}>Hire service providers</Link>
=======
            <Link to="/computers">Computers</Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/mobiles" : "/login"}>Mobiles</Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/laptops" : "/login"}>Laptops</Link>
          </li>
          <li>
            <Link to={isAuthenticated ? "/pendrives" : "/login"}>Pendrives</Link>
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="footer">@ copyright E-Commerce</div>
    </div>
  );
};

export default HomePage;
