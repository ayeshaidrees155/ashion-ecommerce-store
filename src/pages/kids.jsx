import React from 'react'
import Wrapper from "./Wrapper";
import Title from '../components/Title/Title';
import "./pages.css";
import Categories from "../components/Categories/Categories"
import KidsProduct from '../components/Products/Kidsproduct/KidsProduct';
import Path from '../components/Path/Path';


export default function Kids() {

    return (
        <Wrapper>
            <Title
                title="Kids's Collection"
                subtitle="Discover the latest trends in kids's fashion"
            />
            <Path />

            <div className='mainContainer'>
                <div className='leftContainer'>
                    <Categories />
                </div>
                <div className='rightContainer'>
                    <KidsProduct />
                </div>
            </div>



        </Wrapper>
    )
}
