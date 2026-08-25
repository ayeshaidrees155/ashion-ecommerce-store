import React, { useState } from 'react'
import Wrapper from "./Wrapper";
import Title from '../components/Title/Title';
import "./pages.css";
import Categories from "../components/Categories/Categories"
import MenProduct from '../components/Products/MenProduct/MenProduct';
import Path from '../components/Path/Path';
import * as data from "../data/Product.json"
import SortBy from '../components/LiveMap/SortBy/SortBy';



export default function Men() {
    const { men } = data;
    const [type, setType] = useState([]);
    const [subType, setSubType] = useState([]);
    const [size, setSize] = useState([]);
    const [color, setColor] = useState([]);
    const [price, setPrice] = useState(6000);
    const [filteredPrice, setFilteredPrice] = useState(6000);
    //for dropdown
    const [badge, setBadge] = useState('');
    const [sortBy, setSortBy] = useState("Default");
    const applyPriceFilter = () => {
        setFilteredPrice(price);
    };

    const filterItems = men.filter((item) => {
        return (
            (type.length === 0 ? true : type.includes(item.type)) &&
            (subType.length === 0 ? true : subType.includes(item.subType)) &&
            (color.length === 0 ? true : color.includes(item.color)) &&
            (size.length === 0 ? true : size.includes(item.sizes)) &&
            (item.price <= filteredPrice) &&

            (badge === "" || badge === "Default" ? true : item.badge === badge)

        );
    }).sort((a, b) => {
        if (sortBy === "Price:Low to High") return a.price - b.price;
        if (sortBy === "Price:High to Low") return b.price - a.price;
        return 0;
    })

    const handleType = (value) => {
        type.includes(value) ? setType(type.filter(item => item !== value)) : setType([...type, value]);
    }
    const handleSubType = (value) => {
        subType.includes(value) ? setSubType(subType.filter(item => item !== value)) : setSubType([...subType, value]);
    }
    const handleColor = (value) => {
        color.includes(value) ? setColor(color.filter(item => item !== value)) : setColor([...color, value]);
    }
    const handleSize = (value) => {
        size.includes(value) ? setSize(size.filter(item => item !== value)) : setSize([...size, value]);
    }
    return (
        <Wrapper>
            <Title
                title="Men's Collection"
                subtitle="Discover the latest trends in men's fashion"
            />
            <Path />
            {/* product sec */}
            <div className='mainContainer'>
                <div className='leftContainer'>
                    <Categories type={type}
                        handleType={handleType}
                        subType={subType}
                        handleSubType={handleSubType}
                        color={color}
                        handleColor={handleColor}
                        size={size}
                        handleSize={handleSize}
                        price={price}
                        setPrice={setPrice}
                        applyPriceFilter={applyPriceFilter} />
                </div>
                <div className='rightContainer'>
                    <SortBy badge={badge}
                        setBadge={setBadge}
                        sortBy={sortBy}
                        setSortBy={setSortBy} />
                    <MenProduct filterItems={filterItems} />

                </div>
            </div>



        </Wrapper>
    )
}

