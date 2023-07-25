import React from 'react'

function Product({data}) {
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
    </div>
  )
}

export default Product