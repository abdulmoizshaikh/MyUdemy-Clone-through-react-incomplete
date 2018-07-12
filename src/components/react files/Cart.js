import React, { Component } from 'react';
import '../css files/Cart.css';

class Cart extends Component {
    render() {
        return (
            <div className="cart-div">
                <a href="">
                    <div >
                        <img className="cart-img" alt="cartimage" src="https://udemy-images.udemy.com/course/240x135/1560080_5e15_2.jpg?siteID=eyzsD2QGsYg-vN.951ZLuU4xizzaB4VMOw&LSNPUBID=eyzsD2QGsYg" />
                    </div>
                    <div className="cart-content">
                        <p className="text-content">Javascript for begineers - Quick Javascript...</p>
                        <small>Laurence svekis</small>

                        <div className="text-content"><i className="fas fa-star star"></i>
                            <i className="fas fa-star star"></i>
                            <i className="fas fa-star star"></i>
                            <i className="fas fa-star star"></i>
                            <i className="fas fa-star star"></i>
                            <span className="star-text">4.3 </span>
                            <span className="star-text1"> &nbsp;(246)</span>
                        </div>
                        <div id="bottom-text"><del className="star-text1">$99.99</del><span className="star-text">$11.99</span></div>
                    </div>

                </a>
            </div>
        );
    }

}
export default Cart;