import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <h1>CONTACT US</h1>
            <form action="" method="post">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea cols="20" rows="10" placeholder="Message"></textarea>
                <button>SEND</button>
            </form>
        </div>
    )
}

export default Contact
