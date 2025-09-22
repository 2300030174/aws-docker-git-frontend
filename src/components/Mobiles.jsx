import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Mobiles = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Hardcoded cleaning services
    const cleaningServices = [
      {
        id: 1,
        name: "House Cleaning",
        price: 40.0,
        imagePath: "https://via.placeholder.com/150?text=House+Cleaning",
      },
      {
        id: 2,
        name: "Carpet Cleaning",
        price: 60.0,
        imagePath: "https://via.placeholder.com/150?text=Carpet+Cleaning",
      },
      {
        id: 3,
        name: "Sofa Cleaning",
        price: 80.0,
        imagePath: "https://via.placeholder.com/150?text=Sofa+Cleaning",
      },
    ];
    setProducts(cleaningServices);
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
      <h2>Cleaning Services</h2>
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
          <p>No cleaning services available.</p>
        )}
      </div>
    </div>
  );
};

export default Mobiles;
