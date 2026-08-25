import React from "react";
import "./style/Index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Women from "./pages/Women.jsx";
import Men from "./pages/Men";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Kids from "./pages/kids.jsx";
import Cosmetics from "./pages/Cosmetics.jsx";
import Accessories from "./pages/Accessories.jsx";
import Path from "./components/Path/Path.js";
import Wishlist from "./pages/Wishlist.jsx";
import LoginPage from "./pages/LoginPage.jsx";

export default function App() {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/:total" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        //protected routes
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <LoginPage />}
        />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}
