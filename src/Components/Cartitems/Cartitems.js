import React from 'react'
import "./Cartitems.css"
import { BsTrash } from "react-icons/bs"
import sofa from "../Assets/sofa.jpg"
import { useNavigate } from 'react-router-dom'

const Cartitems = () => {
    const removeFromCart = () => {
        alert("Item Removed From cart !")
    }
    const navigate = useNavigate()
    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {/* Cart Item */}
            <div>
                <div className='cartitems-format cartitems-format-main'>
                    <img src={sofa} alt='' className='carticon-product-icon' />
                    <p>Sofa</p>
                    <p>$ 1,500</p>
                    <button className='cartitems-quantity'>1</button>
                    <p>$ 1,500</p>
                    <BsTrash className='cartitems-remove-icon' onClick={() => removeFromCart()} />
                </div>
                <hr />
            </div>
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>$ 1,500</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>$1,500</h3>
                        </div>
                    </div>
                    <button onClick={() => { navigate("/checkout") }}>Proceed to Checkout</button>
                </div>
                <div className='cartitems-promo-code'>
                    <p>If you have a promo code, Enter here !</p>
                    <div className='cartitem-promobox'>
                        <input type='text' placeholder='Promo Code' />
                        <button>Apply Code</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cartitems