import { useContext } from "react";
import { ShopContext } from '../../context/shop-context'
import React from 'react'


function CartItem({data}) {
    const {id, productName, price, productImage} = data
    const {cartItems , addToCart, removeToCart, updateCart} = useContext(ShopContext)
    console.log('Product Image URL:', productImage);
  return (
    <div className='cart-item-container'>
        <img src = {productImage} alt="" />
        <div className="description">
            <p> {productName} </p>
            <p>{price}</p>
            <div className="countHandler">
              <button onClick={()=>{removeToCart(id)}}> - </button>
              <input type="text" value={cartItems[id]} onChange={(e)=> updateCart(Number(e.target.value), id)} /> {/* we always pass in id for specific product */}
              <button onClick={()=>{addToCart(id)}}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem;