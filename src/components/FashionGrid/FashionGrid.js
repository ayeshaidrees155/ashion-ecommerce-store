import React, { useState } from "react";
import "./FashionGrid.css";
import img1 from "../../imgs/pexels-addy-bronzzz-264850064-16848901.jpg";
import img2 from "../../imgs/pexels-erkocphoto-36682777.jpg";
import img3 from "../../imgs/pexels-duy-pham-234114420-30041402.jpg";
import img4 from "../../imgs/pexels-shvetsa-5069484.jpg";
import img5 from "../../imgs/pexels-yuliana-kungurova-333089015-13915355.jpg";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function FashionGrid() {
  const categories = [
    {
      id: 1,
      img: img2,
      title: "Men's fashion",
      count: "358 items",
      path: "/men",
    },
    {
      id: 2,
      img: img3,
      title: "Kid's fashion",
      count: "273 items",
      path: "/kids",
    },
    {
      id: 3,
      img: img4,
      title: "Cosmetics",
      count: "159 items",
      path: "/cosmetics",
    },
    {
      id: 4,
      img: img5,
      title: "Accessories",
      count: "792 items",
      path: "/accessories",
    },
  ];

  return (
    <div className="FaGridSec">
      <div className="leftDiv">
        <img src={img1} alt="error" />
        <div className="cardContent">
          <h1 className="cardTitle">Women's fashion</h1>
          <p className="cardDescription">
            Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            incidid-unt labore edolore magna aliquapendisse ultrices gravida.
          </p>
          <Link to="/women" style={{ color: "black", textDecoration: "none" }}>
            <h5 className="shopNow mini">SHOP NOW</h5>
          </Link>{" "}
        </div>
      </div>

      <div className="rightDiv">
        {categories.map((item) => (
          <div className="categoryBox" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="rightContent">
              <h2 className="miniTitle">{item.title}</h2>
              <p className="itemCount">{item.count}</p>
              <Link
                to={item.path}
                style={{ color: "black", textDecoration: "none" }}
              >
                <h5 className="shopNow mini">SHOP NOW</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
