import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import  CartItem  from "./cart-item";
import './cart.css'


function cart() {
  const {cartItems} = useContext(ShopContext)
  
  return (
    <div className='cart-container'>
          <div className="title-container">
          <h1>Cart Items</h1>
        </div>

      <div className="content-container">
        {PRODUCTS.map((product) =>{
         if(cartItems[product.id] !== 0){
            // console.log(cartItems[product.id])
            return <CartItem data={product}/>// return new component
         }
      })}
      </div>

    </div>
  )
}

export default cart