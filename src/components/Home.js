import React from 'react'
import './Home.css'
import {
    Link
} from "react-router-dom";

function Home() {
    return (
        <div className="banner">
            <div className="ads-shop">
                <h1>TIME FOR CHRISTMAS SHOPPING</h1>
                <p>Get a consistently excellent performance. You deserve amazing hair! By Vilain will get you there.</p>
                <Link to="/products">SHOP NOW</Link>
            </div>
        </div>
    )
}

export default Home
