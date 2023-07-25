import React, { useState } from 'react'
import { PRODUCTS } from '../products'
import { createContext } from 'react'
//contextApi -- watch a video about this later

export const ShopContext = createContext(null)// this context means that it will keep track of states and function that can be accessed everywhere

const getDefaultCart = ()=>{ // loop through whole product and put a key to id for counter
    let cart ={}
    for(let i=1;i<PRODUCTS.length + 1;i++){
        cart[i] = 0
    }
    return cart;
}

function ShopContextProvider(props) {
    // this is where we are going to define states that is related to our projects that can be used globally 

    const [cartItems, setCartItems] = useState(getDefaultCart()); // this will container an object which contains key of our object Product to count how many are in cart
  
        const addToCart = (itemId)=>{
setCartItems((prev) =>  ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

      const removeToCart = (itemId)=>{
setCartItems((prev) =>  ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }

    const contextValue = {cartItems, addToCart, removeToCart}
    
    // console.log(contextValue.cartItems)

    return (

    <ShopContext.Provider value={contextValue}>            {/* to pass it to other components encapsulate it all to this value prop*/}
         {props.children}                           {/*Research more about Props.children */}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
