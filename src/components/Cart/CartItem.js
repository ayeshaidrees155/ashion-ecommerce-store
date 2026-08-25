import React, { useEffect, useState } from "react";
import * as data from "../../data/Product.json";
import { DiVim } from "react-icons/di";
import Button from "../Button/Button";
import "./Cart.css";
import Counter from "../Counter/Counter";
import { Link, useNavigate } from "react-router-dom";

export default function CartItem() {
  const { men, women, kids, accessories, cosmetics } = data;
  const allProduct = [
    ...(men || []),
    ...(women || []),
    ...(kids || []),
    ...(accessories || []),
    ...(cosmetics || []),
  ];

  const [items, setItems] = useState([]);
  const cartCount = items.length;

  useEffect(() => {
    const savedCart = localStorage.getItem("My Cart");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  const delItem = (id) => {
    const upadtedItem = items.filter((item) => item.id !== id);
    setItems(upadtedItem);
    localStorage.setItem("My Cart", JSON.stringify(upadtedItem));
  };

  const handleIncrement = (item) => {
    const updatedItems = items.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, qty: (cartItem.qty || 1) + 1 };
      }
      return cartItem;
    });
    setItems(updatedItems);
    localStorage.setItem("My Cart", JSON.stringify(updatedItems));
  };

  const handleDecrement = (item) => {
    const updatedItems = items.map((cartItem) => {
      if (cartItem.id === item.id && (cartItem.qty || 1) > 1) {
        return { ...cartItem, qty: cartItem.qty - 1 };
      }
      return cartItem;
    });
    setItems(updatedItems);
    localStorage.setItem("My Cart", JSON.stringify(updatedItems));
  };

  const SubTotal = (items || []).reduce(
    (total, item) => total + (item.price || 0) * (item.qty || 1),
    0,
  );

  const shippingChrges = SubTotal > 3000 ? 0 : 200;
  const discount = SubTotal > 5000 ? 0.1 : 0;
  const afterDis = SubTotal * discount;
  const total = SubTotal - afterDis + shippingChrges;
  return (
    <>
      <div className="cartItemSec">
        {items.length == 0 ? (
          <div className="messageBox">
            <p>Your cart is currently empty.</p>
          </div>
        ) : (
          items?.map((item) => (
            <div key={item.id} className="cartProduct">
              <div className="cartImg">
                <img src={require(`../../imgs/${item.img}`)} />
              </div>
              <div className="cartProductName">
                <p>{item.name}</p>
                <p>{item.icon}</p>
              </div>
              <div className="cartPrice">
                <p style={{ color: "red", fontWeight: "bold" }}>
                  Rs.{item.price}
                </p>
              </div>
              <div className="cartCounter">
                <Counter
                  title="Quantity:"
                  quantity={item.qty || 1}
                  setQuantity={(newQty) => {
                    if (newQty > (item.qty || 1)) {
                      handleIncrement(item);
                    } else {
                      handleDecrement(item);
                    }
                  }}
                />
              </div>
              <div className="cartTotal">
                <p>
                  Total: <strong>Rs.{item.price * item.qty}</strong>
                </p>
              </div>
              <Button
                style={{
                  background: "#f2eaea",
                  padding: "5px",
                  height: "43px",
                  width: "39px",
                  color: "black",
                  borderRadius: "26px",
                  fontWeight: "bold",
                  margin: "10px",
                }}
                onClick={() => delItem(item.id)}
                label="X"
              />
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div
          className="order-summary-container responsive"
          style={{ width: "30%", float: "right", margin: "20px" }}
        >
          <h5 className="order-title">CART TOTAL</h5>
          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span className="text-danger fw-bold">Rs. {SubTotal}</span>
            </div>
            <div className="total-row">
              <span>Total</span>
              <span className="text-danger fw-bold">Rs. {total}</span>
            </div>
            <Link to={`/checkout/${total}`}>
              <button className="place-order-btn">PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
