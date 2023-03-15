import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/Context';
import { useAuth0 } from "@auth0/auth0-react";
import './product.css'


const api = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;

const Product = () => {
    const [eData, seteData] = useState([]);
    const { isAuthenticated, user } = useAuth0();

    const getData = () => {
        fetch(api)
            .then(res => res.json())
            .then(data => seteData(data))
    }
    useEffect(() => {
        getData();
    }, [])


    const GlobalState = useContext(CartContext);
    const disp = GlobalState.dispatch;
    console.log(GlobalState);


    return (
        <>
            <div className="main">
                <div className="dispproduct">
                    {
                        eData.map(item => {
                            const { title, price, image, id } = item;
                            const fullName = title.substring(0, 20);
                            const Added = () => disp({ type: 'ADD', payload: item })
                            return (
                                <>
                                    <div className='compcard'>
                                        <NavLink to={`product/${id}`} key={id}>
                                            <img width={150} src={image} />
                                        </NavLink>
                                        <div className="desc">
                                            <hr />
                                            <h5>{fullName}</h5>
                                            <p>Price : ${price}</p>
                                            {
                                                isAuthenticated ? (<button className="btn" onClick={Added}>
                                                    Add To Cart <i class="fa-solid fa-cart-shopping"></i>
                                                </button>) : (
                                                    <button className="btn" onClick={() => alert("Please Login")}>
                                                        Add To Cart <i class="fa-solid fa-cart-shopping"></i>
                                                    </button>
                                                )
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product