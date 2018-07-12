import React, { Component } from 'react';
import CartLists from '../components/react files/CartsLists';
import Nav from '../components/react files/Nav';
import HomeImage from '../components/react files/FrontImage';


class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <HomeImage />
                <CartLists />

            </div>
        );
    }
}

export default Home;