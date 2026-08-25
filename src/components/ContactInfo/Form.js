import React from "react";
import "./Form.css";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import Button from "../Button/Button";

export default function Form() {
  return (
    <>
      <div className="addressSec">
        <h1 className="AddressTitle">CONTACT INFO</h1>
        <h2 className="subTitle">
          <MdLocationPin style={{ margin: "0px 7px", color: "red" }} />
          Address
        </h2>
        <p className="info">
          160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
        </p>
        <h2 className="subTitle">
          <IoCall style={{ margin: "0px 7px", color: "red" }} />
          Phone
        </h2>
        <p className="info">125-711-811 | 125-668-886</p>
        <h2 className="subTitle">
          <FaHeadphones style={{ margin: "0px 7px", color: "red" }} />
          Support
        </h2>
        <p className="info">Support.photography@gmail.com</p>
      </div>
      <div className="formSec">
        <h1 className="AddressTitle">SEND MESSAGE</h1>

        <form>
          <label>
            Your name <strong style={{ color: "red" }}>*</strong>
          </label>
          <input type="text" />
          <label>
            Email Address <strong style={{ color: "red" }}>*</strong>
          </label>
          <input type="text" />
          <label>
            Subject<strong style={{ color: "red" }}>*</strong>
          </label>
          <input type="text" />
          <label>
            Message<strong style={{ color: "red" }}>*</strong>
          </label>
          <textarea rows="7" cols="50"></textarea>
        </form>
        <button
          className="btn"
          style={{
            background: "var(--bg-tertiary)",
            padding: "14px 20px",
            margin: "10px",
            borderRadius: "28px",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--fc-tertiary)",
            fontWeight: "Bold",
            fontSize: "small",
          }}
        >
          SEND MESSAGE
        </button>
      </div>
    </>
  );
}
