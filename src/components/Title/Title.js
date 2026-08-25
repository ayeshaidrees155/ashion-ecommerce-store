import React from "react";
import "./Title.css";
export default function Title({ title, subtitle }) {
  return (
    <div className="titleSec">
      <h1 className="title">{title}</h1>
      <p className="subtitle"> {subtitle}</p>
    </div>
  );
}
