import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaCcStripe,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
  FaApplePay,
} from "react-icons/fa6";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <div className="footerSec">
      <Container fluid className="px-lg-5">
        <div className="footerTop">
          <div className="left">
            <h1 className="logo">Ashion</h1>
            <p className="footerDescrpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt cilisis.
            </p>
            <section className="iconSec">
              <FaCcVisa className="icon borderNone" style={{ color: "blue" }} />
              <FaCcMastercard
                className="icon borderNone"
                style={{ color: "red" }}
              />
              <FaGooglePay
                className="icon borderNone "
                style={{ color: "#6e6ec9" }}
              />
              <FaApplePay
                className="icon borderNone"
                style={{ color: "black" }}
              />
              <FaCcStripe
                className="icon borderNone"
                style={{ color: "#b67eb6" }}
              />
            </section>
          </div>
          <div className="middle">
            <h5>QUICK LINKS</h5>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>FAQ</li>
          </div>
          <div className="middle">
            <h5>ACCOUNTS</h5>
            <li>My Account</li>
            <li>Orders Tracking</li>
            <li>Checkout</li>
            <li>Wishlist</li>
          </div>
          <div className="right">
            <h5>NEWSLETTER</h5>
            <section className="newsSec">
              <input
                type="text"
                id="footerInput"
                placeholder="Enter you Email"
              />
              <button className="btnSubscribe">SUBSCRIBE</button>
            </section>
            <section className="iconSec">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaPinterest className="icon" />
              <FaXTwitter className="icon" />
              <FaYoutube className="icon" />
            </section>
          </div>
        </div>
        <div>
          <p className="copyRight">
            Copyright © 2026 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </Container>
    </div>
  );
}
