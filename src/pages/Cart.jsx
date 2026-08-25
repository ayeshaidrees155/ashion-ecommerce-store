import React from 'react'
import CartItem from '../components/Cart/CartItem'
import Path from '../components/Path/Path'

export default function Cart() {
    return (
        <div>
            <Path style={{ margin: '10px 10px 10px 30px' }} />
            <CartItem />
        </div>
    )
}
