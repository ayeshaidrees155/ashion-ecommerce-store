import React, { useState } from "react";
import Loader from "../../Loader/Loader";
import "./Blog.css";
import * as data from "../../../data/Product.json";

export default function BlogCard() {
  const { blog } = data;
  //loader
  const [imgLoading, setImgLoading] = useState({});
  const handleLoad = (id) => {
    setImgLoading((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <div className="container">
      <div className="blogGrid">
        {blog?.map((item, index) => (
          <div
            key={item.id}
            className={`blogCard ${index === 0 || index === 7 ? "large" : "small"}`}
          >
            <div className="blogImg">
              {!imgLoading[item.id] && (
                <div className="img-loader-wrapper">
                  <Loader />
                </div>
              )}
              <img
                src={require(`../../../imgs/${item.img}`)}
                onLoad={() => handleLoad(item.id)}
                style={{
                  display: imgLoading[item.id] ? "block" : "none",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="blogContent">
              <p className="blogTitle">{item.description}</p>
              <p className="authorDiv">
                by <span>{item.author}</span> | {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
