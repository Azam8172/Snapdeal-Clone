import React, { useContext, useEffect, useState, useReducer } from 'react'
import { CartContext } from '../Context/Context'
import './Cart.css'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Cart = () => {

    const GlobalState = useContext(CartContext);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;

    const [totalPrice, setTotalPrice] = useState(0);
    const { isAuthenticated, user } = useAuth0();

    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 };
            case 'DECREMENT':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    }
    const [state1, dispatch1] = useReducer(reducer, { count: 1 });

    useEffect(() => {
        let count = 0;
        state.map((i) => {
            count += i.price;
        })
        setTotalPrice(count);
    }, [state])


    return (
        <>
            <div className="cartNavbar">
                <div className='complogo'>
                    <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
                </div>
            </div>
            <div className="totalall">
                <div className="total">
                    <div className="secondnav">
                        <NavLink to='/'>
                            <i class="fa-solid fa-arrow-left"></i>
                        </NavLink>
                    </div>
                    <div className="tt">
                        <p className='t'>Total - </p>
                        <p className='t'> ${totalPrice} </p>
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                {
                    state.map((item, index) => {
                        return (
                            <div className="onecomp">
                                <img src={item.image} alt="snapdeal" />
                                <div className="desccomp">
                                    <h4>{item.title}</h4>
                                    <p>Rating : {item.rating.rate}</p>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="count">
                                    <button onClick={() => dispatch1({ type: 'INCREMENT', payload: item })}>+</button>
                                    <span>{state1.count}</span>
                                    <button onClick={() => dispatch1({ type: 'DECREMENT', payload: item })}>-</button>
                                </div>
                                <h1 className='dele' onClick={() => dispatch({ type: 'REMOVE', payload: item })}>
                                    <i class="fa-solid fa-trash"></i>
                                </h1>
                            </div>
                        )
                    })
                }

                {
                    isAuthenticated ? (
                        <>
                            <NavLink to={{ pathname: '/buyNow', state: { price: totalPrice } }}>
                                <button className='btn'>Buy Now for $ {totalPrice}</button>
                            </NavLink>
                        </>

                    ) : (
                        <>
                            <button className='btn' onClick={() => alert("Please Login . . .")}>Buy Now for $ {totalPrice}</button>
                        </>
                    )
                }
            </div>

        </>
    )
}

export default Cart