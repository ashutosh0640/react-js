import React, { useState, useCallback } from 'react'
import './ProductList.css'

import ProductDisplay from './ProductDisplay.jsx'

function ProductList({ products }) {
    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const filteredProducts = useCallback(() => {
        return products.filter(product =>
            product.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [filter, products]);

    const sortedProducts = useCallback(() => {
        return filteredProducts().sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (sortOrder === 'desc') {
                return b.name.localeCompare(a.name)
            } else {
                return products;
            }
        })
    }, [sortOrder, filteredProducts]);

    return (
        <>
            <div className=' main-div'>
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Filter products"
                />
                <div>
                    <button onClick={() => setSortOrder('asc')}>Sort Asc</button>
                    <button onClick={() => setSortOrder('')}>Reset</button>
                    <button onClick={() => setSortOrder('desc')}>Sort Desc</button>
                </div>


                <ProductDisplay products={sortedProducts()} />
            </div>
        </>
    )
}

export default ProductList;