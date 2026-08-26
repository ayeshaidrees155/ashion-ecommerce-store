import React from 'react'
import Wrapper from "./Wrapper";
import Title from '../components/Title/Title';
import "./pages.css";
import Categories from "../components/Categories/Categories"
import AccessoriesProduct from '../components/Products/AccessoriesProduct/AccessoriesProduct';
import Path from '../components/Path/Path';


export default function Accessories() {

    return (
        <Wrapper>
            <Title
                title="Accessories's Collection"
                subtitle="Discover the latest trends in Accessories's fashion"
            />
            <Path />

            <div className='mainContainer'>
                <div className='leftContainer'>
                    <Categories />
                </div>
                <div className='rightContainer'>
                    <AccessoriesProduct />
                </div>
            </div>



        </Wrapper>
    )
}
