import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import './FullData.css'
import { useContext } from 'react';
import { CartContext } from '../Context/Context';
import Navbar from '../Navbar/Navbar';
import { useAuth0 } from "@auth0/auth0-react";

const apikey = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`

const FullData = () => {
    const { id } = useParams();
    console.log(id);

    const GlobalState = useContext(CartContext);
    const dispatch = GlobalState.dispatch;

    const [isLoading, setIsLoading] = useState(true);
    const [allData, setallData] = useState("");
    const { isAuthenticated } = useAuth0();
    const [isChecked, setIsChecked] = useState(false);
    const [price, setPrice] = useState(0);

    const getDatas = async (url) => {
        try {
            console.log(url)
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setIsLoading(false)
            setallData(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getDatas(`${apikey}/${id}`)
    }, [id])

    const checkBox = (event) => {
        setPrice(allData.price)
        const isChecked = event.target.checked;
        setIsChecked(isChecked);
        setPrice(isChecked ? (allData.price + 10) : (allData.price));
    }

    if (isLoading) {
        return (
            <div className="data-section">
                <div className="loading">Loading....</div>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <hr />
            <section className="comp-section">
                <div className="comp-card">
                    <figure>
                        <img src={allData.image} className='listimage' alt='image' />
                    </figure>
                    <div className="card-content">
                        <div className="info">
                            <h2 className="title">{allData.title}</h2>
                            <p className="about">About :-{allData.description}</p>
                            <p className="rating">Rating out of 10 is {allData.rating.rate}/10</p>
                            <p className="rating">Rating given by {allData.rating.count} people</p>
                            <h3 className="pp">Price ${allData.price}</h3>
                        </div>
                        <div className="allbtn">
                            <div className='delivery'>Delivery Charge - $10 for fast delivery (Click to Add)
                                <input type="checkbox" className='check' checked={isChecked} onClick={checkBox} />
                            </div>
                            {price > 0 && <h4 className='finalPp'>Total Price: $ {price}</h4>}
                            {
                                isAuthenticated ? (
                                    <>
                                        <button className="btnAdd" onClick={() => dispatch({ type: 'ADD', payload: allData }) 
                                        && 
                                        alert("please Login . . . .") }>
                                            Add to Cart<i class="fa-solid fa-cart-shopping"></i>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="btnAdd" onClick={() => alert("please Login . . . .")}>
                                            Add to Cart<i class="fa-solid fa-cart-shopping"></i>
                                        </button>
                                    </>
                                )
                            }
                            <NavLink to="/" className="back-btn">
                                <button className="btnAdd"><i class="fa-solid fa-arrow-left"></i> Go Back</button>
                            </NavLink>
                            {
                                isAuthenticated ? (
                                    <>
                                        <NavLink to='/buyNow'>
                                            <button className='btnAdd'>Buy Now for $ {allData.price}</button>
                                        </NavLink>
                                    </>

                                ) : (
                                    <>
                                        <button className='btnAdd' onClick={() => alert("Please Login . . .")}>Buy Now for $ {allData.price}</button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FullData