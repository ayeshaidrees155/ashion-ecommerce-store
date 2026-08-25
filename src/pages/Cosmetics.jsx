import React from 'react'
import Wrapper from "./Wrapper";
import Title from '../components/Title/Title';
import "./pages.css";
import Categories from "../components/Categories/Categories"
import CosmeticsProduct from '../components/Products/CosmeticsProduct/CosmeticsProduct';
import Path from '../components/Path/Path';


export default function Cosmetics() {

    return (
        <Wrapper>
            <Title
                title="Cosmetics's Collection"
                subtitle="Discover the latest trends in Cosmetics's fashion"
            />
            <Path />
            <div className='mainContainer'>
                <div className='leftContainer'>
                    <Categories />
                </div>
                <div className='rightContainer'>
                    <CosmeticsProduct />
                </div>
            </div>



        </Wrapper>
    )
}
