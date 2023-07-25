import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// imports above are just basically ways to make my single page router app have multiple views based on URL
import Navbar from './components/Navbar'
import Shop from './Pages/shop/shop'
import Cart from './Pages/cart/cart'
import ShopContextProvider from './context/shop-context'


function App() {
 

  return (
  <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar /> {/*There is Heirarchy soo this Navbar component will be present in all route/s */}
        <Routes>
        <Route path ="/" element={<Shop />}/> {/* These are the links */}
        <Route path ="/cart"element={<Cart />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
