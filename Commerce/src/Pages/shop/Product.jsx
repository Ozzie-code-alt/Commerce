import React, { useContext } from 'react'
import {ShoppingCart} from 'phosphor-react'
import {ShopContext} from '../../context/shop-context'



function Product({data}) {
    const {addToCart} = useContext(ShopContext)
    const {id, productName, price, productImage} = data
    // console.log(data)
  return (
    // end here continue tom with css 
    <div className='img-container'>
        <img src={productImage} alt="" />
        <div className="product-description">
          <p>{productName}</p>
          <p>${price}</p>
        </div>
        <div className="btn-container">
        <button onClick={() => addToCart(id)}>Add to <ShoppingCart /></button>
        </div>
    </div>
  )
}

export default Product