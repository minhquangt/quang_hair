import React from 'react'

function CartItem({ item, deleteCartItem, addBtn, subBtn }) {
    return (
        <div className="cart-item">
            <img src={item.image} alt="gold" width="150" height="150" />
            <div className="cart-text">
                <p>{item.name}</p>
                <p>{formatNumber(item.price)}<span>đ</span></p>
                <div className="cart-item-quantity">
                    <button onClick={() => subBtn(item)} className="sub-btn">-</button>
                    <input value={item.quantity} type="text" readOnly />
                    <button onClick={() => addBtn(item)} className="add-btn">+</button>
                </div>
            </div>
            <div className="close" onClick={() => deleteCartItem(item)}>
                <i className="far fa-times-circle"></i>
            </div>
        </div>
    )
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default CartItem
