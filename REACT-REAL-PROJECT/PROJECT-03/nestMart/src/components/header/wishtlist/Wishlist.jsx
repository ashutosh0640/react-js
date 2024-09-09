import React, { useState } from 'react'
import './Wishlist.css'

const Wishlist = () => {
    const [compare, setCompare] = useState(0);
    const [wishlist, setWishlist] = useState(0);
    const [cart, setCart] = useState(0);


    return (
        <div className=' h-full text-sm flex items-center justify-between'>

            <div className=' flex items-baseline justify-center relative'>
                <span className=' flex justify-center items-center p-1 size-5 bg-[#49b885] text-white rounded-2xl absolute left-4 -top-2'>{compare}</span>
                <img src="../src/assets/header/icon-compare.svg" alt="compare-icon" />
                <p>Compare</p>
            </div>

            <div className=' flex items-baseline justify-center relative'>
                <span className=' flex justify-center items-center p-1 size-5 bg-[#49b885] text-white rounded-2xl absolute left-4 -top-2'>{wishlist}</span>
                <img src="../src/assets/header/icon-heart.svg" alt="heart-icon" />
                <p>Wishlist</p>
            </div>

            <div className=' flex items-baseline justify-center relative'>
                <span className=' flex justify-center items-center p-1 size-5 bg-[#49b885] text-white rounded-2xl absolute left-4 -top-2'>{cart}</span>
                <img src="../src/assets/header/icon-cart.svg" alt="cort-icon" />
                <p>Cart</p>
            </div>

            <div className=' flex items-baseline justify-center'>
                <img src="../src/assets/header/icon-user.svg" alt="user-icon" />
                <p>Account</p>
            </div>
        </div>
    )
}

export default Wishlist
