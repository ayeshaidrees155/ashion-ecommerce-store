import React from "react";

export default function Button({ style, onClick, label, icon }) {
  return (
    <button className="btn" style={style} onClick={onClick}>
      {icon}
      {label}
    </button>
  );
}
