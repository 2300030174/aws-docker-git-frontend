import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/Aboutus';
import Computers from './components/Computers';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
<<<<<<< HEAD
=======
import Pendrives from './components/Pendrives';
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart';
import Payment from './components/Payment';
import Orders from './components/Orders';



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<AboutUs />} />
          <Route path="home" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="computers" element={<Computers />} />
          <Route path="mobiles" element={<Mobiles />} />
          <Route path="laptops" element={<Laptops />} />
<<<<<<< HEAD
=======
          <Route path="pendrives" element={<Pendrives />} />
>>>>>>> 350b0b7057fe48fc409858b2657d643fb34b2e13
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="productpage" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
