import React, { Component } from 'react';
import '../css files/CartsList.css';
import Cart from './Cart';

class CartsLists extends Component {
    render() {
        return (
            <div id="divOne">
                <div className="sec-div">
                    <div className="content-txt">Because you searched for "javascript"  </div><br/>
                    <div className="third-div">
                        <span className="cartClass"><Cart /></span>
                        <span className="cartClass"><Cart /></span>
                        <span className="cartClass"><Cart /></span>
                        <span className="cartClass"><Cart /></span>
                        <span className="cartClass"><Cart /></span>
                    </div>
                </div>
            </div>
        );
    }

}
export default CartsLists;