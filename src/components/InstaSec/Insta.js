import React from "react";
import "./Insta.css";
import img1 from "../../imgs/pexels-ds-stories-7256136.jpg";
import img2 from "../../imgs/pexels-lribeirofotografia-2112651.jpg";
import img3 from "../../imgs/pexels-mibernaa-31995174.jpg";
import img4 from "../../imgs/pexels-mizunokozuki-13929357.jpg";
import img5 from "../../imgs/pexels-n-voitkevich-6214386.jpg";
import img6 from "../../imgs/pexels-roman-odintsov-5903551.jpg";
import { FaInstagram } from "react-icons/fa";

export default function Insta() {
  const imgs = [img1, img2, img3, img4, img5, img6];

  return (
    <div className=" instaSec">
      {imgs.map((img, index) => (
        <div className="instaImg" key={index}>
          <img src={img} alt="error" />
          <div className="overlay">
            <FaInstagram />
            <span>@ashion_Shop</span>
          </div>
        </div>
      ))}
    </div>
  );
}
