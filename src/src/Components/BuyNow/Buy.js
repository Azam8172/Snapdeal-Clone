import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Buy.css";
import { useAuth0 } from "@auth0/auth0-react";
const Buy = (props) => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className="cartNavbar">
        <div className="complogo">
          <img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" />
        </div>
      </div>
      <div className="totalall">
        <div className="total">
          <div className="secondnav">
            <NavLink to="/">
              <i class="fa-solid fa-house"></i>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="container">
        <from className="from">
          <div className="name">
            <label htmlFor="Pincode">Pincode :- </label>
            <input type="text" placeholder="Enter Pincode... " />
          </div>
          {isAuthenticated ? (
            <>
              <div className="name">
                <label htmlFor="Name">Name :- </label>
                <input
                  type="text"
                  placeholder="Enter Name... "
                  value={user.name}
                />
              </div>
              <div className="name">
                <label htmlFor="Email">Email :- </label>
                <input
                  type="email"
                  placeholder="Enter Email... "
                  value={user.email}
                />
              </div>
            </>
          ) : (
            <>
              <div className="name">
                <label htmlFor="Name">Name :- </label>
                <input type="text" placeholder="Enter Name... " />
              </div>
              <div className="name">
                <label htmlFor="Email">Email :- </label>
                <input type="email" placeholder="Enter Email... " />
              </div>
            </>
          )}

          <div className="name">
            <label htmlFor="Email">Phone :- </label>
            <input type="number" placeholder="Enter phone number... " />
          </div>
          <div className="name">
            <label htmlFor="Address">Address :- </label>
            <textarea
              type="text"
              placeholder="Enter Address... "
              className="add"
            />
          </div>
          <div className="orderbar">
            <NavLink to="/">
              <button className="orderBack">Go back</button>
            </NavLink>
            <div className="name">
            <NavLink to ="/payment">
              <button className="orderBtn">
                Processed for payment
              </button>
              </NavLink>
            </div>
          </div>
        </from>
      </div>
    </>
  );
};

export default Buy;
