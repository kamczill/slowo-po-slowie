import React from 'react'

const CartProductFeature = ({product, cart}) => {
    const quantity = cart.find(cartProduct => cartProduct.id === product.id).quantity
    const price = product.price * quantity
    
    return(
        <div className="flex justify-between border-b-2 border-black py-3">
            <h3>{product.title}</h3>
            <span>{price} zł</span>
        </div>  
    )
}

export default CartProductFeature