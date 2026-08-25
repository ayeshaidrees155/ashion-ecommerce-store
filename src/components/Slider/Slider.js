import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slideImg1 from "../../imgs/blog5.jpg";
import slideImg2 from "../../imgs/pexels-yuliana-kungurova-333089015-13915355.jpg";
import slideImg3 from "../../imgs/slider3.jpg";
import "../FashionGrid/FashionGrid.css";
import "./slider.css";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ padding: "20px 0px" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideImg1}
          alt="First slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption style={{ top: "45%" }}>
          <h3 style={{ fontFamily: "var(--ff-fancy)", cursor: "pointer" }}>
            The Project Jacket
          </h3>
          <p
            style={{
              borderBottom: "2px solid red",
              width: "fit-content",
              margin: "10px auto",
              cursor: "pointer",
            }}
          >
            SHOP NOW
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideImg2}
          alt="First slide"
          style={{ height: "500px", objectFit: "cover" }}
        />{" "}
        <Carousel.Caption style={{ top: "45%" }}>
          <h3 style={{ fontFamily: "var(--ff-fancy)", cursor: "pointer" }}>
            Urban Street Style
          </h3>
          <p
            style={{
              borderBottom: "2px solid red",
              width: "fit-content",
              margin: "10px auto",
              cursor: "pointer",
            }}
          >
            SHOP NOW
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideImg3}
          alt="First slide"
          style={{ height: "500px", objectFit: "cover" }}
        />{" "}
        <Carousel.Caption style={{ top: "45%" }}>
          <h3 style={{ fontFamily: "var(--ff-fancy)", cursor: "pointer" }}>
            Linen Breeze Dress
          </h3>
          <p
            style={{
              borderBottom: "2px solid red",
              width: "fit-content",
              margin: "10px auto",
              cursor: "pointer",
            }}
          >
            SHOP NOW
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
