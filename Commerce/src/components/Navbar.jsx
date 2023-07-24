import React from 'react'
import { Link } from 'react-router-dom' // we import link for references 
import {ShoppingCart} from 'phosphor-react' // not the best way to use Icons pero i try hohoho
import './Styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>

        <div className="link-container">
            <Link to={"/"} className='Shop'> Shop</Link> {/*to here signifies the endpoint*/}
            <Link to={"/cart"} className='cart'><ShoppingCart size={32}/> </Link>
        </div>
    </div>
  )
}

export default Navbar