import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
<<<<<<< HEAD
=======
import { getProducts } from "../services/productService";
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
import { useNavigate } from "react-router-dom";
import "./style.css";

const Computers = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const fetchProducts = async () => {
      const data = await getProducts("computers"); // Fetch only computer category
      setProducts(data);
    };
    fetchProducts();
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
  }, []);

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to the cart!");
      navigate("/login");
      return;
    }

    addToCart(product);
<<<<<<< HEAD
    navigate("/cart");
=======
    navigate("/cart"); // Redirect to cart page after adding product
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
  };

  return (
    <div className="product-container">
<<<<<<< HEAD
      <h2>Home Services</h2>
=======
      <h2>Computers</h2>
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
<<<<<<< HEAD
              <img src={product.imagePath} alt={product.name} />
=======
              <img
                src={`http://localhost:8080/api/products/images/${product.imagePath}`}
                alt={product.name}
              />
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
<<<<<<< HEAD
          <p>No home services available.</p>
=======
          <p>No computers available.</p>
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
        )}
      </div>
    </div>
  );
};

export default Computers;
