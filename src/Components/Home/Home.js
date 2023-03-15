import React from 'react'
import Navbar from '../Navbar/Navbar'
import Product from '../Product/Product'
import './Home.css'


const Home = () => {
    return (
        <>
            <div className="nav-all">
                <Navbar />
            </div>
            <div className="maincomp">
                <Product />
            </div>

        </>
    )
}

export default Home