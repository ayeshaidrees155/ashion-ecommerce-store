import React, { useState } from "react";
import "./Categories.css";
import { Accordion } from "react-bootstrap";
import { FaWeight } from "react-icons/fa";

<div className="mainContainer">
  <div className="leftContainer">
    <Categories
      type={type}
      setType={setType}
      subType={subType}
      setSubType={setSubType}
      color={color}
      setColor={setColor}
      size={size}
      setSize={setSize}
      price={price}
      setPrice={setPrice}
      applyPriceFilter={applyPriceFilter}
    />
  </div>
  <div className="rightContainer">
    <WomenProduct filterItems={filterItems} />
  </div>
</div>; //....ends here

export default function Categories({
  type,
  setType,
  subType,
  setSubType,
  color,
  setColor,
  size,
  setSize,
  price,
  setPrice,
  applyPriceFilter,
}) {
  const filterItems = women.filter((item) => {
    return (
      (type === "" ? true : item.type === type) &&
      (subType === "" ? true : item.subType === subType) &&
      (color === "" ? true : item.color === color) &&
      (size === "" ? true : item.size === size) &&
      item.price <= filteredPrice
    );
  });

  return (
    <div className="sideBar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h1 className="catTitle" style={{ margin: 0 }}>
          CATEGORIES
        </h1>
      </div>

      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header
            onClick={() => setType(type === "clothing" ? "" : "clothing")}
          >
            Clothing
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li
                onClick={() =>
                  setSubType(subType === "dresses" ? "" : "dresses")
                }
              >
                - Dresses
              </li>
              <li
                onClick={() => setSubType(subType === "jeans" ? "" : "jeans")}
              >
                - Jeans
              </li>
              <li
                onClick={() => setSubType(subType === "shirts" ? "" : "shirts")}
              >
                - Shirts
              </li>
              <li onClick={() => setSubType(subType === "coat" ? "" : "coat")}>
                - Coats
              </li>
              <li
                onClick={() => setSubType(subType === "jacket" ? "" : "jacket")}
              >
                - Jackets
              </li>
              <li
                onClick={() => setSubType(subType === "shirts" ? "" : "shirts")}
              >
                - T Shirts
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header
            onClick={() => setType(type === "shoes" ? "" : "shoes")}
          >
            Shoes
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li
                onClick={() => setSubType(subType === "heels" ? "" : "heels")}
              >
                - Heels
              </li>
              <li
                onClick={() =>
                  setSubType(subType === "sandals" ? "" : "sandals")
                }
              >
                - Sandals
              </li>
              <li
                onClick={() =>
                  setSubType(subType === "sneakers" ? "" : "sneakers")
                }
              >
                - Sneakers
              </li>
              <li
                onClick={() => setSubType(subType === "boots" ? "" : "boots")}
              >
                - Boots
              </li>
              <li
                onClick={() => setSubType(subType === "flats" ? "" : "flats")}
              >
                - Flats
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header
            onClick={(e) => setType(type === "bag" ? "" : "bag")}
          >
            Bags
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li
                onClick={() =>
                  setSubType(subType === "handbag" ? "" : "handbag")
                }
              >
                - Handbags
              </li>
              <li
                onClick={() =>
                  setSubType(subType === "backpack" ? "" : "backpack")
                }
              >
                - Backpacks
              </li>
              <li
                onClick={() => setSubType(subType === "clucth" ? "" : "clutch")}
              >
                - Cluthes
              </li>
              <li
                onClick={() => setSubType(subType === "totes" ? "" : "totes")}
              >
                - Totes
              </li>
              <li
                onClick={() =>
                  setSubType(subType === "flatbag" ? "" : "flatbag")
                }
              >
                - Flats
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header
            onClick={() => setType(type === "accessories" ? "" : "accessories")}
          >
            Accessories
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li
                onClick={() => setSubType(subType === "watch" ? "" : "watch")}
              >
                - Watches
              </li>
              <li
                onClick={() =>
                  setSubType(subType === "glassess" ? "" : "glasses")
                }
              >
                - Sunglasses
              </li>
              <li onClick={() => setSubType(subType === "belt" ? "" : "belt")}>
                - Belts
              </li>
              <li
                onClick={() =>
                  setSubType(subType === "jewellery" ? "" : "jewellery")
                }
              >
                - Jewelery
              </li>
              <li
                onClick={() =>
                  setSubType(subType === "scarves" ? "" : "scarves")
                }
              >
                - Scarves
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* shop by price */}
      <h1 className="catTitle">SHOP BY PRICE</h1>
      <input
        type="range"
        id="range"
        min="0"
        max="6000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <div className="priceFilter">
        <p style={{ margin: "10px" }}>Price:</p>
        <p
          style={{
            color: "var(--fc-secondary)",
            fontWeight: "lighter",
            margin: "10px",
          }}
        >
          Rs.{price}
        </p>
        <button className="filterBtn" onClick={applyPriceFilter}>
          FILTER
        </button>
      </div>
      {/* sopy by size */}
      <h1 className="catTitle">SHOP BY SIZE</h1>
      <div>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setSize(e.target.checked ? "S" : "")}
          />
          <label>S</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setSize(e.target.checked ? "XS" : "")}
          />
          <label>XS</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setSize(e.target.checked ? "XXS" : "")}
          />
          <label>XXS</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setSize(e.target.checked ? "M" : "")}
          />
          <label>M</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setSize(e.target.checked ? "M-L" : "")}
          />
          <label>M-L</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setSize(e.target.checked ? "L" : "")}
          />
          <label>L</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setSize(e.target.checked ? "XL" : "")}
          />
          <label>XL</label>
        </span>
      </div>
      {/* sopy by color */}
      <h1 className="catTitle">SHOP BY COLOR</h1>
      <div>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setColor(e.target.checked ? "black" : "")}
          />
          <label>Blacks</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setColor(e.target.checked ? "white" : "")}
          />
          <label>Whites</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setColor(e.target.checked ? "red" : "")}
          />
          <label>Reds</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setColor(e.target.checked ? "grey" : "")}
          />
          <label>Greys</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setColor(e.target.checked ? "blue" : "")}
          />
          <label>Blues</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setColor(e.target.checked ? "beige" : "")}
          />
          <label>Beige Tones</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setColor(e.target.checked ? "green" : "")}
          />
          <label>Greens</label>
        </span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => setColor(e.target.checked ? "yellow" : "")}
          />
          <label>Yellows</label>
        </span>
      </div>
    </div>
  );
}
