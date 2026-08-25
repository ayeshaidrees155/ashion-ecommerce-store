import React, { useState } from 'react'
import "./pages.css";
import { useLocation, Link, useParams } from "react-router-dom";
import Counter from '../components/Counter/Counter';
import { FaWeight } from 'react-icons/fa';
import { IoMdHeartEmpty } from "react-icons/io";
import data from "../data/Product.json";

import Button from '../components/Button/Button';
import Wrapper from './Wrapper';
import ProductSlider from '../components/Products/Productslider/ProductSlider';
import Path from '../components/Path/Path';
import { MdHeight } from 'react-icons/md';
import { PiX } from 'react-icons/pi';

export default function ProductDetails() {
    const { men, women, kids, cosmetics, accessories } = data;
    const allproduct = [
        ...women,
        ...men,
        ...kids,
        ...accessories,
        ...cosmetics
    ];

    const { id } = useParams();
    const item = allproduct.find((item) => item.id === Number(id));


    console.log(item);


    const goToCartPage = (item) => {
        const prevCart = JSON.parse(localStorage.getItem("My Cart")) || [];

        const cartData = { ...item, qty: quantity };
        const newCart = [...prevCart, cartData];
        localStorage.setItem("My Cart", JSON.stringify(newCart));
        window.dispatchEvent(new Event("storage"));
    };


    const [quantity, setQuantity] = useState(1);

    const goToWishlistPage = (item) => {
        const prevWishlist = JSON.parse(localStorage.getItem("My Wishlist")) || [];
        const currentDate = new Date().toLocaleDateString("en-PK", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const wishlistData = {
            ...item,
            dateAdded: currentDate,
        };
        const newWishlist = [...prevWishlist, wishlistData];
        localStorage.setItem("My Wishlist", JSON.stringify(newWishlist));
        window.dispatchEvent(new Event("storage"));

    };


    if (!item) return <Wrapper><div>Product not found</div></Wrapper>;

    const currentSliderImgs = item.sliderImgs || [item.img];

    return (
        <Wrapper>
            <Path style={{ paddingTop: "120px" }} />
            <div className='detailsContainer'>

                <ProductSlider sliderImgs={currentSliderImgs} />


                <div className='detailsSec'>

                    <h1 style={{ textTransform: 'uppercase' }} className='detailName'>{item.name}</h1>
                    <p>{item.icon}</p>
                    <h3 className='detailPrice'>Rs.{item.price}</h3>
                    <p className='detailDescription'>{item.description}</p>

                    {/* selection section */}
                    <div className='selSection'>
                        <Counter
                            title='Quantity:'
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />

                        <Button
                            style={{
                                background: "var(--bg-tertiary)",
                                padding: "0 25px",
                                margin: "0 5px",
                                height: "48px",
                                borderRadius: "28px",
                                border: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#ffffff",
                                fontWeight: "bold",
                                fontSize: "14px",
                                cursor: "pointer",
                                boxSizing: "border-box"
                            }}
                            className="add-to-cart-btn"
                            label='ADD TO CART'
                            onClick={() => goToCartPage(item)}
                        />

                        <div className='wishlistIconDiv'>
                            <IoMdHeartEmpty
                                className='wishlistIcon'
                                onClick={() => goToWishlistPage(item)}
                            />
                        </div>
                    </div>

                    <hr></hr>
                    <span>
                        <p style={{
                            fontWeight: 'bold',
                            margin: '5px 19px 4px 5px'
                        }}>Availability:</p>
                        <input type='checkbox' style={{ margin: '12px 0px 10px 21px' }} />

                        <label style={{ color: 'var(--fc-secondary)', margin: '5px 2px' }}>In Stock</label>
                    </span>
                    <span>
                        <p style={{
                            fontWeight: 'bold',
                            margin: '5px 19px 4px 5px'
                        }}>Colors:</p>
                        <div className='circleDiv'>
                            <div className='circle' style={{ background: 'red' }}></div>
                            <div className='circle' style={{ background: 'black' }}></div>
                            <div className='circle' style={{ background: 'brown' }}></div>
                        </div>

                    </span>
                    <span>
                        <p style={{
                            fontWeight: 'bold',
                            margin: '5px 19px 4px 5px'
                        }}>Available Size:</p>
                        <p style={{ color: 'var(--fc-secondary)', margin: '2px' }}>XS S M L</p>

                    </span>
                    <span >
                        <p style={{
                            fontWeight: 'bold',
                            margin: '5px 19px 4px 5px'
                        }} >Promotion:</p>
                        <p style={{ color: 'var(--fc-secondary)', margin: '5px 25px' }}>Free Shipping</p>

                    </span>

                </div>
            </div>
        </Wrapper>
    )
}
