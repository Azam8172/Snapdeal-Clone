import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Cart from './Components/Cart/Cart';
import FullData from './Components/FullData/FullData';
import Home from './Components/Home/Home';
import Buy from './Components/BuyNow/Buy'
import Payment from './Components/Payment/Payment';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:id' element={<FullData />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='product/:id/cart' element={<Cart />} />
          <Route path='/buyNow' element={<Buy />} />
          <Route path ='/payment' element ={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;