import React from 'react'
import { data } from './Data'
import ProductItem from './ProductItem';
import './Products.css'

function Products({ addCartItem }) {
    return (
        <div className="products">
            <div className="intro">
                <h1>By Vilain</h1>
                <p>
                    We provide professional men’s grooming products that give you a satisfying styling performance time after time. By Vilain has revolutionized the hair styling game with quality ingredients and consistently excellent performance, and you’ll find our products all over the world: from London to Singapore.
                </p>
                <p>
                    We’re proud of having customers in over 120 countries and for providing the go-to products for professional salons worldwide.
                </p>
                <p>Our range of professional hair products is formulated in collaboration between our Danish R&D team and professional hairdressers – delivering the high-caliber products that By Vilain is known for.</p>
            </div>
            <div className="product-list">
                {data.map(item => {
                    return (
                        <ProductItem key={item.id}
                            item={item}
                            addCartItem={addCartItem}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Products
