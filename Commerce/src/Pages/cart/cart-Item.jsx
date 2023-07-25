import React from 'react'


function CartItem(props) {
    const {id, productName, price, productImage} = props.data
    console.log('Product Image URL:', productImage);
  return (
    <div className='cart-item-container'>
        <img src = {productImage} alt="" />
        <div className="description">
            <p> {productName} </p>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default CartItem;