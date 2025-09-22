import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Computers = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Hardcoded products for Home Services
    const hardcodedProducts = [
      {
        id: 1,
        name: "AC Repair",
        price: 50.0,
        imagePath: "https://via.placeholder.com/150?text=AC+Repair",
      },
      {
        id: 2,
        name: "Plumbing Service",
        price: 70.0,
        imagePath: "https://via.placeholder.com/150?text=Plumbing",
      },
      {
        id: 3,
        name: "House Cleaning",
        price: 40.0,
        imagePath: "https://via.placeholder.com/150?text=Cleaning",
      },
    ];

    setProducts(hardcodedProducts);
  }, []);

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to the cart!");
      navigate("/login");
      return;
    }

    addToCart(product);
    navigate("/cart"); // Redirect to cart page after adding product
  };

  return (
    <div className="product-container">
      <h2>Home Services</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imagePath} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No home services available.</p>
        )}
      </div>
    </div>
  );
};

export default Computers;
