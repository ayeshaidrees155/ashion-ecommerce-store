import React, { useState } from "react";
import "../WomenProduct/WomenProduct.css";
import data from "../../../data/Product.json";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const CategoryBtn = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`catBtn ${isActive ? "activeBtn" : ""}`}
      onClick={onClick}
      style={{ margin: "5px", padding: "10px" }}
    >
      {label}
    </button>
  );
};
export default function FilteredProduct() {
  const { men, women, kids, accessories, cosmetics } = data;
  const allProduct = [
    ...(men || []),
    ...(women || []),
    ...(kids || []),
    ...(accessories || []),
    ...(cosmetics || []),
  ];

  const [selectedCat, setSelectedCat] = useState("All");
  const categories = [
    "All",
    "Men",
    "Women",
    "Kids",
    "Accessories",
    "Cosmetics",
  ];

  let productToDisplay = [];
  if (selectedCat === "All") {
    productToDisplay = allProduct.filter((item) => item.category);
  } else {
    productToDisplay = allProduct.filter(
      (item) => item.category?.toLowerCase() === selectedCat.toLowerCase(),
    );
  }

  const navigate = useNavigate();
  const goToProductDetails = (item) => {
    navigate(`/productDetails/${item.id}`, { state: { item: item } });
  };
  // cart
  const goToCartPage = (item) => {
    const prevCart = JSON.parse(localStorage.getItem("My Cart")) || [];
    const existingIndex = prevCart.findIndex(
      (cartItem) => cartItem.id === item.id,
    );

    let newCart;
    if (existingIndex !== -1) {
      newCart = prevCart.map((cartItem, index) => {
        if (index === existingIndex) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
        return cartItem;
      });
    } else {
      const cartData = { ...item, qty: 1 };
      newCart = [...prevCart, cartData];
    }

    localStorage.setItem("My Cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  //wishlist
  const goToWishlistPage = (item) => {
    const prevWishlist = JSON.parse(localStorage.getItem("My Wishlist")) || [];

    const isAlreadyExist = prevWishlist.some(
      (wishItem) => wishItem.id === item.id,
    );

    if (!isAlreadyExist) {
      const currentDate = new Date().toLocaleDateString("en-PK", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const wishlistData = {
        ...item,
        dateAdded: currentDate,
      };

      const newWishlist = [...prevWishlist, wishlistData];
      localStorage.setItem("My Wishlist", JSON.stringify(newWishlist));
      window.dispatchEvent(new Event("storage"));
    } else {
      return;
    }
  };
  return (
    <div className="filteredSec">
      <div className="categories">
        <div>
          <h1 className="heading">NEW PRODUCT</h1>
        </div>
        <div className="allBtn">
          {categories.map((cat, index) => (
            <CategoryBtn
              key={index}
              label={cat}
              isActive={selectedCat === cat}
              onClick={() => setSelectedCat(cat)}
            />
          ))}
        </div>
      </div>
      <div className="WProductSec">
        {productToDisplay?.map((item, index) => (
          <div className="product" key={`${item.id}-${index}`}>
            <div className="productImg">
              <img src={require(`../../../imgs/${item.img}`)} />
              <div className="productOverlay">
                <IoEyeSharp
                  className="overlayIcon"
                  onClick={() => goToProductDetails(item)}
                />
                <FaShoppingCart
                  className="overlayIcon"
                  onClick={() => goToCartPage(item)}
                />
                <FaHeart
                  className="overlayIcon"
                  onClick={() => goToWishlistPage(item)}
                />
              </div>
            </div>
            <div className="productDescription">
              <p className="productName">{item.name}</p>
              <p className="productIcon">{item.icon}</p>
              <h3 className="productPrice">Rs.{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
