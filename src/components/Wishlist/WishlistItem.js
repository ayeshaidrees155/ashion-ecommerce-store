import React, { useEffect } from "react";
import { useState } from "react";
import "./Wishlist.css";
import Button from "../Button/Button";

export default function WishlistItem() {
  const [wishlistItem, setWishlistItem] = useState([]);
  useEffect(() => {
    const savedWishlist = localStorage.getItem("My Wishlist");
    if (savedWishlist) {
      setWishlistItem(JSON.parse(savedWishlist));
    }
  }, []);

  const delItem = (id) => {
    const upadtedItem = wishlistItem.filter((item) => item.id !== id);
    setWishlistItem(upadtedItem);
    localStorage.setItem("My Wishlist", JSON.stringify(upadtedItem));
  };

  const ClearAll = () => {
    setWishlistItem([]);
    localStorage.removeItem("My Wishlist");
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

  const handleAddall = () => {
    let prevCart = JSON.parse(localStorage.getItem("My Cart")) || [];

    wishlistItem.forEach((wishItem) => {
      const existingIndex = prevCart.findIndex((c) => c.id === wishItem.id);

      if (existingIndex !== -1) {
        prevCart[existingIndex].qty = (prevCart[existingIndex].qty || 1) + 1;
      } else {
        prevCart.push({ ...wishItem, qty: 1 });
      }
    });

    localStorage.setItem("My Cart", JSON.stringify(prevCart));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="wishlistSec">
      {wishlistItem.length > 0 ? (
        <>
          <div className="headingRow">
            <span className="col-delete"></span>{" "}
            <span className="col-product">Product</span>
            <span className="col-price" style={{ marginLeft: "105px" }}>
              Price
            </span>
            <span className="col-date">Date Added</span>
            <span className="col-action"></span>{" "}
          </div>
          {wishlistItem.map((item) => (
            <div key={item.id} className="wishlistProduct">
              <div className="col-delete">
                <Button
                  style={{
                    background: "#e6e6e6",
                    padding: "5px",
                    height: "43px",
                    width: "39px",
                    color: "black",
                    borderRadius: "26px",
                    fontWeight: "bold",
                  }}
                  onClick={() => delItem(item.id)}
                  label="X"
                />
              </div>
              <div className="col-product">
                <div className="wishProductImg">
                  <img
                    src={require(`../../imgs/${item.img}`)}
                    alt={item.name}
                  />
                </div>
                <div className="product-info">
                  <h4>{item.name}</h4>
                </div>
              </div>
              <div className="col-price wishProductPrice">Rs.{item.price}</div>
              <div
                className="col-date"
                style={{ color: "#555", fontSize: "14px" }}
              >
                {item.dateAdded}
              </div>

              <div className="col-action">
                <Button
                  style={{
                    background: "#e6e6e6",
                    fontSize: "small",

                    color: "black",

                    padding: "10px 25px",
                  }}
                  onClick={() => goToCartPage(item)}
                  label="Add to Cart"
                />
              </div>
            </div>
          ))}
          <div className="wishlistBtns">
            <Button
              style={{
                fontSize: "small",
                border: "none !important",
                color: "black",
                textDecoration: "underline",
                padding: "10px 25px",
                margin: "5px",
              }}
              onClick={ClearAll}
              label="Clear All Wishlist"
            />
            <Button
              style={{
                background: "#e6e6e6",
                fontSize: "small",
                margin: "5px",
                color: "black",

                padding: "10px 25px",
              }}
              onClick={() => handleAddall()}
              label="Add All to Cart"
            />
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <p>Your wishlist is empty.</p>
        </div>
      )}
    </div>
  );
}
