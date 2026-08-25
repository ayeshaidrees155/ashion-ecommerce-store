import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./Path.css";

export default function Path({ style }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") {
    return null;
  }

  const pageName = location.pathname.replace("/", "");

  return (
    <div className="path-bar" style={style}>
      <div className="pathSec">
        <div className="path-links">
          <div className="home-btn" onClick={() => navigate("/")}>
            <AiFillHome className="pathIcon" /> Home
          </div>
          <span className="slash"> &gt; </span>
          <span className="current-page">{pageName}</span>
        </div>
      </div>
    </div>
  );
}
