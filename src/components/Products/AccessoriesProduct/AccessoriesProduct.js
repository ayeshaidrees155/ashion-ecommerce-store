import React, { useState } from "react";
import "../WomenProduct/WomenProduct.css";
import productData from "../../../data/Product.json";
import { IoEyeSharp } from "react-icons/io5";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";

export default function CosmeticsProduct() {
  const accessories = productData.accessories || [];
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
  //loader
  const [imgLoading, setImgLoading] = useState({});
  const handleLoad = (id) => {
    setImgLoading((prev) => ({ ...prev, [id]: true }));
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
    <div className="WProductSec">
      {accessories?.map((item) => (
        <div className="product" key={item.id}>
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
      ))}
    </div>
  );
}
