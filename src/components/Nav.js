import React from 'react'
import {
    Link
} from "react-router-dom";
import logo from '../asset/Logo.png'
import './Nav.css'
function Nav({ cartList }) {
    return (
        <div className="navbar fixed-top">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact us</Link>
            </div>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="cart-icon">
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    {cartList.length > 0 && <span>{cartList.length}</span>}
                </Link>
            </div>

        </div>
    )
}

export default Nav
