import React from "react";
import "./Counter.css";

export default function Counter({ title, quantity, setQuantity }) {
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <>
      <div className="qtySelector">
        <p style={{ fontWeight: "bold", margin: "10px", fontSize: "small" }}>
          {title}
        </p>
        <button className="qtyVal" onClick={decrement}>
          -
        </button>
        <span className="qty">{quantity}</span>
        <button className="qtyVal" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}
