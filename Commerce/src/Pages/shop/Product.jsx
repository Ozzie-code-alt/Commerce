import React, { useContext } from 'react'
import {ShoppingCart} from 'phosphor-react'
import {ShopContext} from '../../context/shop-context'



function Product(prop) {
    const {addToCart, cartItems} = useContext(ShopContext) // we passed it here  frin shop-context
    const {id, productName, price, productImage} = prop.data
    // console.log(productImage)

    const cartItemAmount = cartItems[id]
  return (
    // end here continue tom with css 
    <div className='img-container'>
        <img src={productImage} alt="" />
        <div className="product-description">
          <p>{productName}</p>
          <p>${price}</p>
        </div>

        <div className="btn-container">
        <button onClick={() => addToCart(id)}>Add to <ShoppingCart /> {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button> {/*if cartItemAmount is greater than 0 generate a new blank div with total clicks */}
        
        </div>
    </div>
  )
}

export default Product