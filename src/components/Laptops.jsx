import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
<<<<<<< HEAD
=======
import { getProducts } from "../services/productService";
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
import { useNavigate } from "react-router-dom";
import "./style.css";

const Laptops = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const fetchProducts = async () => {
      const data = await getProducts("laptops"); // Fetch only computer category
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // Redirect to cart page after adding product
  };


  return (
    <div className="product-container">
      <h2>Laptops</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={`http://localhost:8080/api/products/images/${product.imagePath}`} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No laptops available.</p>
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
        )}
      </div>
    </div>
  );
};

export default Laptops;
