import React from 'react'
import Header from '../components/Header/Header'
import Insta from '../components/InstaSec/Insta'
import Footer from '../components/Footer/Footer'

export default function Wrapper({ children }) {
    return (
        <>
            <Header />
            <div style={{}}>
                {children}
            </div>
            <Insta />
            <Footer />
        </>
    )
}
