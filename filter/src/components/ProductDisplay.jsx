import React from 'react'
import './ProductDisplay.css'

function ProductDisplay({products}) {
    return (
        <>
        <div className=' product-catalog'>
            {products.map(product => (
                <div key={product.id}>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.inStock?'In stock':'Out of stock'}</div>
                </div>
            ))}
        </div>
        </>
    )
}

export default ProductDisplay;