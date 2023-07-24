import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'

function shop() {
  return (
    <div className='shop-container'>
        
        <div className="title-container">
            <h1>Commerce Shop</h1>
        </div>

        <div className="products-container">
            {PRODUCTS.map((value) => <Product data={value}/>)}   {/*Made a prop Data */}
            
        </div>
    </div>
  )
}

export default shop