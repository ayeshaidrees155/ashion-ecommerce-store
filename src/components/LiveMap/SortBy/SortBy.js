import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./SortBy.css";

export default function SortBy({ badge, setBadge, sortBy, setSortBy }) {
  const handleBadge = (value) => {
    setBadge(value);
  };
  const handleSort = (value) => {
    setSortBy(value);
  };
  return (
    <div className="sortSec">
      <div className="shownItem">
        <p>Showing 1-12 of 126 results</p>
      </div>
      <div className="dropDown">
        <p>Sort by:</p>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {badge || sortBy || "Default"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() => {
                handleBadge("");
                handleSort("");
              }}
            >
              Default
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() => handleSort("Price:Low to High")}
            >
              Price:Low to High
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => handleSort("Price:High to Low")}
            >
              Price:High to Low
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={() => handleBadge("New")}>
              Newest First
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => handleBadge("Best Selling")}
            >
              Best Rating
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => handleBadge("Sale")}
            >
              Sale
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
