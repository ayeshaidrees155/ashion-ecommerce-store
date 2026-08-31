import React, { useState } from 'react'
import "./pages.css";
import { useParams } from "react-router-dom";
import Counter from '../components/Counter/Counter';
import { IoMdHeartEmpty } from "react-icons/io";
import productData from "../data/Product.json";
import Button from '../components/Button/Button';
import Wrapper from './Wrapper';
import ProductSlider from '../components/Products/Productslider/ProductSlider';
import Path from '../components/Path/Path';

export default function ProductDetails() {
    const { men = [], women = [], kids = [], cosmetics = [], accessories = [] } = productData;
    const allproduct = [
        ...women,
        ...men,
        ...kids,
        ...accessories,
        ...cosmetics
    ];

    const { id } = useParams();
    const item = allproduct.find((item) => item.id === Number(id));

    const goToCartPage = (item) => {
        const prevCart = JSON.parse(localStorage.getItem("My Cart")) || [];
        const existingIndex = prevCart.findIndex(
            (cartItem) => cartItem.id === item.id,
        );

        let newCart;
        if (existingIndex !== -1) {
            newCart = prevCart.map((cartItem, index) => {
                if (index === existingIndex) {
                    return { ...cartItem, qty: cartItem.qty + 1 };
                }
                return cartItem;
            });
        } else {
            const cartData = { ...item, qty: 1 };
            newCart = [...prevCart, cartData];
        }

        localStorage.setItem("My Cart", JSON.stringify(newCart));
        window.dispatchEvent(new Event("storage"));
    };

    const [quantity, setQuantity] = useState(1);

    const goToWishlistPage = (item) => {
        const prevWishlist = JSON.parse(localStorage.getItem("My Wishlist")) || [];

        const isAlreadyExist = prevWishlist.some(
            (wishItem) => wishItem.id === item.id,
        );

        if (!isAlreadyExist) {
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
        } else {
            return;
        }
    };

    if (!item) return <Wrapper><div>Product not found</div></Wrapper>;

    const currentSliderImgs = item.sliderImgs || [item.img];

    return (
        <Wrapper>
            <Path style={{ paddingTop: "120px" }} />
            <div className='detailsContainer'>
                <div className='detailsSliderWrapper'>
                    <ProductSlider sliderImgs={currentSliderImgs} />
                </div>

                <div className='detailsSec'>
                    <h1 style={{ textTransform: 'uppercase' }} className='detailName'>{item.name}</h1>
                    <p>{item.icon}</p>
                    <h3 className='detailPrice'>Rs.{item.price}</h3>
                    <p className='detailDescription'>{item.description}</p>

                    <div className='selSection'>
                        <div className='counterWishlistRow'>
                            <Counter
                                title='Quantity:'
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />

                            <div className='wishlistIconDiv'>
                                <IoMdHeartEmpty
                                    className='wishlistIcon'
                                    onClick={() => goToWishlistPage(item)}
                                />
                            </div>
                        </div>

                        <Button
                            style={{
                                background: "var(--bg-tertiary)",
                                padding: "0 25px",
                                margin: "0",
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
                    </div>

                    <hr />
                    <div className='detailMetaRow'>
                        <p className='detailMetaTitle'>Availability:</p>
                        <input type='checkbox' className='detailMetaCheckbox' defaultChecked disabled />
                        <label className='detailMetaText'>In Stock</label>
                    </div>
                    <div className='detailMetaRow'>
                        <p className='detailMetaTitle'>Colors:</p>
                        <div className='circleDiv'>
                            <div className='circle' style={{ background: 'red' }}></div>
                            <div className='circle' style={{ background: 'black' }}></div>
                            <div className='circle' style={{ background: 'brown' }}></div>
                        </div>
                    </div>
                    <div className='detailMetaRow'>
                        <p className='detailMetaTitle'>Available Size:</p>
                        <p className='detailMetaValue'>XS S M L</p>
                    </div>
                    <div className='detailMetaRow'>
                        <p className='detailMetaTitle'>Promotion:</p>
                        <p className='detailMetaValue'>Free Shipping</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}