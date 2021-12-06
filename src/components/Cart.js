import React from 'react'
import CartItem from './CartItem'
import './Cart.css'

function Cart({ cartList, deleteCartItem, addBtn, subBtn }) {
    return (
        <div className="cart">
            <h1>SHOPPING CART</h1>
            {cartList.length > 0 &&
                cartList.map(item => {
                    return (
                        <CartItem
                            addBtn={addBtn}
                            subBtn={subBtn}
                            deleteCartItem={deleteCartItem}
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
            {cartList.length === 0 &&
                <p>Your cart is currently empty.</p>
            }
            {cartList.length > 0 &&
                <div className="total-price">
                    <h5>SUBTOTAL</h5>
                    <p>
                        {
                            formatNumber(cartList.reduce((item1, item2) => {
                                return item1 + item2.quantity * item2.price
                            }, 0)
                            )
                        }
                        <span>đ</span>
                    </p>
                    <button>BUY</button>
                </div>
            }
        </div>
    )
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default Cart
