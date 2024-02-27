import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Checkout from './Pages/Checkout'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/sofa' element={<ShopCategory  category="sofa" />} />
        <Route path='/bed' element={<ShopCategory  category="bed" />} />
        <Route path='/decors' element={<ShopCategory  category="decors" />} />
        <Route path='/lights' element={<ShopCategory  category="lights" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':id' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App