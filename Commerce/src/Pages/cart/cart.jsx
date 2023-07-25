import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import  CartItem  from "./cart-item";
import './cart.css'
import {useNavigate} from 'react-router-dom'

function cart() {
  const {cartItems, getTotal} = useContext(ShopContext)
  const totalAmount = getTotal()
  const navigate = useNavigate()
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
      { totalAmount >0 ?
        <div className="checkout-container">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={()=> navigate("/")}>Continue Shopping </button>
          <button>Checkout </button>
        </div>
        : <h1> Your Cart is Empty </h1>
}
    </div>
  )
}

export default cart