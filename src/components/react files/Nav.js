import React, { Component } from 'react';
import '../css files/Nav.css';
// import Search from './Search';
// import cat from '../images/category.png'
import cart from '../images/cart.png';

class NavBar extends Component {
    render() {
        return (
            <div id="nav-div">
                <div id="inner-div">


                    <div className="nav-options">
                        <div >
                            <img className="udemy-logo" src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="udemy-logo" width="110px" height="32px" />
                        </div>
                    </div>

                    <div className="nav-options">
                        <div>
                            <span>
                                <i className="fas fa-th" style={{ color: 'gray' }} ></i>
                            </span>
                            <span>
                                Categuries
                            </span>
                        </div>
                        <div>
                            <span>
                                <input id="search-elem" type="text" placeholder="Search for Courses"/>
                            </span>
                        </div>
                    </div>

                    <div className="nav-options">
                        <div className="right-div">
                            <button className="business-btns">Udemy for Business</button>
                            <button className="business-btns">Teach Online</button>
                        </div>
                        <div className="right-div">
                        {/* style={{border:'1px solid black'}} */}
                          <div className="round-btn" style={{backgroundImage: `url(${cart})`}}></div>
                            {/* <button className="round-btn"><i class="fas fa-shopping-cart" style={{color:'transparent',backgroundColor:'gray'}}></i></button> */}
                        </div>

                        <div className="right-div">
                            <button className="logsign-btn">Log In</button>
                            <button className="logsign-btn" >Sign Up</button>
                            
                        </div>
                    </div>



                </div>
            </div>
        );
    }

}
export default NavBar;