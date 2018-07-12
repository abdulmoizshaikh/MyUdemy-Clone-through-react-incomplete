import React, { Component } from 'react';
import pic from '../images/home.jpg';
import '../css files/FrontImage.css';

class FrontImage extends Component {
    render() {
        return (
            <div id="first-div">
                <div className="sec-div">
                    <img src={pic} alt="home page pic" id="main-img" />
                </div>
            </div>
        );
    }

}
export default FrontImage;