import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
<<<<<<< HEAD
=======
import { getProducts } from "../services/productService";
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
import { useNavigate } from "react-router-dom";
import "./style.css";

const Mobiles = () => {
<<<<<<< HEAD
=======

>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const fetchProducts = async () => {
      const data = await getProducts("mobiles"); // Fetch only computer category
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart"); // Redirect to cart page after adding product
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
  };

  return (
    <div className="product-container">
<<<<<<< HEAD
      <h2>Cleaning Services</h2>
=======
      <h2>Mobiles</h2>
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
<<<<<<< HEAD
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
=======
              <img src={`http://localhost:8080/api/products/images/${product.imagePath}`} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No mobiles available.</p>
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
        )}
      </div>
    </div>
  );
};

export default Mobiles;
