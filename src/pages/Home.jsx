import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper'
import FashionGrid from "../components/FashionGrid/FashionGrid"
import Slider from '../components/Slider/Slider'
import FilteredProduct from '../components/Products/FilteredProduct/FilteredProduct'
import Loader from '../components/Loader/Loader'


export default function Home() {
    const [loading, setLoading] = useState(false)

    return (
        <Wrapper>
            {loading ? <Loader />
                : (
                    <>
                        <FashionGrid />
                        <FilteredProduct />
                        <Slider />
                    </>
                )}
        </Wrapper>
    )
}
