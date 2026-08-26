import React from "react";
import "./Categories.css";
import { Accordion } from "react-bootstrap";

export default function Categories({
  type,
  handleType,
  subType = [],
  handleSubType,
  color = [],
  handleColor,
  size = [],
  handleSize,
  price,
  setPrice,
  applyPriceFilter,
}) {
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
          <Accordion.Header onClick={() => handleType("clothing")}>
            Clothing
          </Accordion.Header>
          <Accordion.Body>
            <span>
              <input
                type="checkbox"
                checked={subType.includes("dresses")}
                onChange={() => handleSubType("dresses")}
              />
              <label>Dresses</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("jeans")}
                onChange={() => handleSubType("jeans")}
              />
              <label>Jeans</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("shirts")}
                onChange={() => handleSubType("shirts")}
              />
              <label>Shirts</label>
            </span>

            <span>
              <input
                type="checkbox"
                checked={subType?.includes("coat")}
                onChange={() => handleSubType("coat")}
              />
              <label>Coats</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("jackets")}
                onChange={() => handleSubType("jackets")}
              />
              <label>Jackets</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("tshirts")}
                onChange={() => handleSubType("tshirts")}
              />
              <label> T Shirts</label>
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => handleType("shoes")}>
            Shoes
          </Accordion.Header>
          <Accordion.Body>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("heels")}
                onChange={() => handleSubType("heels")}
              />
              <label>Heels</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("sandals")}
                onChange={() => handleSubType("sandals")}
              />
              <label>Sandals</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("sneakers")}
                onChange={() => handleSubType("sneakers")}
              />
              <label>Sneakers</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("boots")}
                onChange={() => handleSubType("boots")}
              />
              <label>Boots</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("flats")}
                onChange={() => handleSubType("flats")}
              />
              <label>Flats</label>
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header onClick={() => handleType("bags")}>
            Bags
          </Accordion.Header>
          <Accordion.Body>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("handbags")}
                onChange={() => handleSubType("handbags")}
              />
              <label>Handbags</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("backpacks")}
                onChange={() => handleSubType("backpacks")}
              />
              <label>Backpacks</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("clutches")}
                onChange={() => handleSubType("clutches")}
              />
              <label>Clutches</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("totes")}
                onChange={() => handleSubType("totes")}
              />
              <label>Totes</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("flatbag")}
                onChange={() => handleSubType("flatbag")}
              />
              <label>Flats</label>
            </span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header onClick={() => handleType("accessories")}>
            Accessories
          </Accordion.Header>
          <Accordion.Body>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("watch")}
                onChange={() => handleSubType("watch")}
              />
              <label>Watches</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("glasses")}
                onChange={() => handleSubType("glasses")}
              />
              <label>Sunglasses</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("belt")}
                onChange={() => handleSubType("belt")}
              />
              <label>Belts</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("jewellery")}
                onChange={() => handleSubType("jewellery")}
              />
              <label>Jewellery</label>
            </span>
            <span>
              <input
                type="checkbox"
                checked={subType?.includes("scarves")}
                onChange={() => handleSubType("scarves")}
              />
              <label>Scarves</label>
            </span>
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
      {/* shopy by size */}
      <h1 className="catTitle">SHOP BY SIZE</h1>
      <div>
        <span>
          <input
            type="checkbox"
            checked={size.includes("S")}
            onChange={() => handleSize("S")}
          />
          <label>S</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={size.includes("XS")}
            onChange={() => handleSize("XS")}
          />
          <label>XS</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={size.includes("XXS")}
            onChange={() => handleSize("XXS")}
          />
          <label>XXS</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={size.includes("M")}
            onChange={() => handleSize("M")}
          />
          <label>M</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={size.includes("M-L")}
            onChange={() => handleSize("M-L")}
          />
          <label>M-L</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={size.includes("L")}
            onChange={() => handleSize("L")}
          />
          <label>L</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={size.includes("XL")}
            onChange={() => handleSize("XL")}
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
            checked={color.includes("black")}
            onChange={() => handleColor("black")}
          />
          <label>Blacks</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={color.includes("white")}
            onChange={() => handleColor("white")}
          />
          <label>Whites</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={color.includes("red")}
            onChange={() => handleColor("red")}
          />
          <label>Reds</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={color.includes("grey")}
            onChange={() => handleColor("grey")}
          />
          <label>Greys</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={color.includes("blue")}
            onChange={() => handleColor("blue")}
          />
          <label>Blues</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={color.includes("beige")}
            onChange={() => handleColor("beige")}
          />
          <label>Beige Tones</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={color.includes("green")}
            onChange={() => handleColor("green")}
          />
          <label>Greens</label>
        </span>
        <span>
          <input
            type="checkbox"
            checked={color.includes("yellow")}
            onChange={() => handleColor("yellow")}
          />
          <label>Yellows</label>
        </span>
      </div>
    </div>
  );
}
