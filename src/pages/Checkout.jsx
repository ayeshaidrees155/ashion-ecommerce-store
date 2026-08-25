import React, { useEffect, useState } from 'react'
import CartSummary from '../components/Cart/CartSummary'
import { useLocation, useParams } from "react-router-dom";
import BillingForm from '../components/ContactInfo/Billingform';
import Path from '../components/Path/Path';

export default function Checkout() {


    const { total } = useParams();
    const [items, setItem] = useState([]);
    useEffect(() => {
        const savedCart = localStorage.getItem("My Cart");
        if (savedCart)
            setItem(JSON.parse(savedCart))
    }, [])


    const [isFormValid, setIsFormValid] = useState(false);
    return (
        <>
            <Path style={{ margin: '10px 10px 10px 30px' }} />
            <div className='parentConatiner' style={{ gap: '20px' }}>
                <div className='billingForm' >
                    <BillingForm onValidationChange={setIsFormValid} />

                </div>
                <div className='bill'>
                    <CartSummary
                        items={items}
                        orderTotal={Number(total) || 0}
                        isFormValid={isFormValid}
                    />
                </div>

            </div>
        </>
    )
}
