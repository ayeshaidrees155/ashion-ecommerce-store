import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoBagOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [WishlistCount, setwishlistCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const checkauth = () => {
      const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
      setIsLogIn(loggedInStatus);
    };
    checkauth();
    window.addEventListener("storage", checkauth);
    return () => window.removeEventListener("storage", checkauth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogIn(false);
    navigate("/loginPage");
  };

  const goToCartPage = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const updateCount = () => {
      const savedCart = localStorage.getItem("My Cart");
      if (savedCart) {
        const items = JSON.parse(savedCart);
        const totalQty = items.reduce((acc, val) => acc + (val.qty || 1), 0);
        setCartCount(totalQty);
      }
    };
    updateCount();
    window.addEventListener("storage", updateCount);

    return () => window.removeEventListener("storage", updateCount);
  }, []);

  const goToWishlistPage = () => {
    navigate("/wishlist");
  };

  useEffect(() => {
    const updateWishCount = () => {
      const savedWishlist = localStorage.getItem("My Wishlist");
      if (savedWishlist) {
        const wishlistItem = JSON.parse(savedWishlist);
        const totalQty = wishlistItem.reduce(
          (acc, val) => acc + (val.qty || 1),
          0,
        );
        setwishlistCount(totalQty);
      } else {
        setwishlistCount(0);
      }
    };
    updateWishCount();
    window.addEventListener("storage", updateWishCount);

    return () => {
      window.removeEventListener("storage", updateWishCount);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid className="px-md-5">
        <Navbar.Brand href="#home" className="logo">
          Ashion
        </Navbar.Brand>

        <div className="d-flex align-items-center order-lg-last">
          <div className="linkSec d-none d-lg-flex me-3">
            {isLogIn ? (
              <span
                onClick={handleLogout}
                className="loginLink"
                style={{ cursor: "pointer" }}
              >
                Logout
              </span>
            ) : (
              <>
                <Link to={"/loginPage"} className="loginLink">
                  Login /
                </Link>
                <Link to={"/loginPage"} className="loginLink">
                  Register
                </Link>
              </>
            )}
          </div>
          <IoMdSearch className="searchIcon navIcon me-3" />
          <div style={{ position: "relative", cursor: "pointer" }}>
            <IoMdHeartEmpty
              className="cartIcon navIcon me-3"
              onClick={goToWishlistPage}
            />

            {WishlistCount > 0 ? (
              <span className="cartBadge">{WishlistCount}</span>
            ) : null}
          </div>
          <div style={{ position: "relative", cursor: "pointer" }}>
            <IoBagOutline
              className="cartIcon navIcon me-3"
              onClick={goToCartPage}
            />

            {cartCount > 0 ? (
              <span className="cartBadge">{cartCount}</span>
            ) : null}
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navItems navbar-nav">
            <Nav.Link as={Link} to="/" className="navItem">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/women" className="navItem">
              WOMEN'S
            </Nav.Link>
            <Nav.Link as={Link} to="/men" className="navItem">
              MEN'S
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="navItem">
              BLOG
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="navItem">
              CONTACT
            </Nav.Link>

            <div className="d-lg-none mobLink">
              {isLogIn ? (
                <Nav.Link
                  onClick={handleLogout}
                  className="navItem margin"
                  style={{ marginLeft: "11px", cursor: "pointer" }}
                >
                  Logout
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    to="/loginPage"
                    className="navItem margin"
                    style={{ marginLeft: "11px" }}
                  >
                    Login /
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/loginPage"
                    className="navItem margin"
                  >
                    Register
                  </Nav.Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
