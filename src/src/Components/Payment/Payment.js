import React,{useState} from 'react';
import './Payment.css';
import { NavLink } from 'react-router-dom';

const Payment = () => {
  return (
    
    <>
    <div className="mainBody">
      <div class="paycontainer">
        <h2>Confirm Your Payment</h2>
        <div class="first-row">
            <div class="owner">
                <h4>Owner</h4>
                <div class="input-field">
                    <input type="text" />
                </div>
            </div>
            <div class="cvv">
                <h4>CVV</h4>
                <div class="input-field">
                    <input type="password" />
                </div>
            </div>
        </div>
        <div class="second-row">
            <div class="card-number">
                <h4>Card Number</h4>
                <div class="input-field">
                    <input type="text" />
                </div>
            </div>
        </div>
        <div class="third-row">
            <h4>Card Number</h4>
            <div class="selection">
                <div class="date">
                    <select name="months" id="months">
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                      </select>
                      <select name="years" id="years">
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                      </select>
                </div>
                <div class="cards">
                    <img src=".//masterCard.png" alt="" />
                    <img src=".//paypal.png" alt="" />
                    <img src=".//vise.png" alt="" />
                </div>
            </div>    
        </div>
        <NavLink to="/">
              <button className="done" onClick={() => alert("your order has been placed successfully")} > <a href="" className='done'>Confirm</a>
       </button>
        </NavLink>
       
    </div></div>
    </>
  )
}

export default Payment;