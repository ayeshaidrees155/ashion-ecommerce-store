import React from "react";
import { FaShoppingCart, FaWeight } from "react-icons/fa";

export default function Button({ style, onClick, label, icon }) {
  return (
    <button className="btn" style={style} onClick={onClick}>
      {icon}

      {label}
    </button>
  );
}
