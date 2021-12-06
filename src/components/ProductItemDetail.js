import React from 'react'
import { useParams } from 'react-router'
import { data } from './Data'
import './ProductItemDetail.css'

function ProductItemDetail({ addCartItem }) {
    const param = useParams();
    return (
        <>
            {
                data.map(item => {
                    if (item.id === param.id) {
                        let arrDes = item.description.split('#')
                        return (
                            <div key={item.id} className="product-item-detail">
                                <img src={item.image} alt="gold" />
                                <div className="description">
                                    <h1 className="product-name">{item.name}</h1>
                                    <h1>{formatNumber(item.price)}</h1>
                                    <button onClick={() => addCartItem(item)} className="buy-product">Add to Cart</button>
                                    <div className="product-title">
                                        <h1>{item.title}</h1>
                                        <p><span>Description: </span>{item.content}</p>
                                        <ul>
                                            {arrDes.map(item => {
                                                return (
                                                    <li>{item}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return true
                })
            }
        </>
    )
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default ProductItemDetail
