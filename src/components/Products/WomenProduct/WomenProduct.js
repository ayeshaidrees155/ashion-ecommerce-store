import React, { useState } from "react";
import "./WomenProduct.css";
import data from "../../../data/Product.json";
import { IoEyeSharp } from "react-icons/io5";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

export default function WomenProduct({ filterItems }) {
  const [imgLoading, setImgLoading] = useState({});

  const handleLoad = (id) => {
    setImgLoading((prev) => ({ ...prev, [id]: true }));
  };

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
    <div className="WProductSec">
      {filterItems?.length === 0 ? (
        <div
          style={{ padding: "40px", textAlign: "center", width: "100%" }}
          className="alert"
        >
          <h3>No products found in this category.....</h3>
        </div>
      ) : (
        filterItems?.map((item) => (
          <div className="product" key={item.id}>
            <div
              className="badge"
              style={{
                background:
                  item.badge === "Sale"
                    ? "red"
                    : item.badge === "Best Selling"
                      ? "orange"
                      : item.badge === "Out of Stock"
                        ? "blue"
                        : "",
              }}
            >
              {item.badge}
            </div>
            <div className="productImg">
              {!imgLoading[item.id] && (
                <div className="img-loader-wrapper">
                  <Loader />
                </div>
              )}
              <img
                src={require(`../../../imgs/${item.img}`)}
                alt={item.name}
                onLoad={() => handleLoad(item.id)}
                style={{
                  display: imgLoading[item.id] ? "block" : "none",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="productOverlay">
                <Link to={`/productDetails/${item.id}`} className="blackColor">
                  <IoEyeSharp className="overlayIcon" />
                </Link>
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
        ))
      )}
    </div>
  );
}
