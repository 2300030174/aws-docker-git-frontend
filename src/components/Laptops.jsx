import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Laptops = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Hardcoded service providers
    const serviceProviders = [
      {
        id: 1,
        name: "John Doe",
        domain: "Plumbing",
        mobile: "+91 9876543210",
        imagePath: "https://via.placeholder.com/150?text=John+Doe",
      },
      {
        id: 2,
        name: "Jane Smith",
        domain: "Electrician",
        mobile: "+91 9123456780",
        imagePath: "https://via.placeholder.com/150?text=Jane+Smith",
      },
      {
        id: 3,
        name: "Bob Johnson",
        domain: "House Cleaning",
        mobile: "+91 9988776655",
        imagePath: "https://via.placeholder.com/150?text=Bob+Johnson",
      },
    ];

    setProducts(serviceProviders);
  }, []);

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to the cart!");
      navigate("/login");
      return;
    }

    addToCart(product);
    navigate("/cart"); // Redirect to cart page after adding service
  };

  return (
    <div className="product-container">
      <h2>Hire Service Providers</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((provider) => (
            <div key={provider.id} className="product-card">
              <img src={provider.imagePath} alt={provider.name} />
              <h4>{provider.name}</h4>
              <p>Domain: {provider.domain}</p>
              <p>Mobile: {provider.mobile}</p>
              <button onClick={() => handleAddToCart(provider)}>
                Hire
              </button>
            </div>
          ))
        ) : (
          <p>No service providers available.</p>
        )}
      </div>
    </div>
  );
};

export default Laptops;
