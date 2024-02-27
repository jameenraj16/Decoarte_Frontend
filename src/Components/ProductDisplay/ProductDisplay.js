import React from 'react'
import "./ProductDisplay.css"
import sofa from "../Assets/sofa.jpg"
import { BsCart, BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProductDisplay = () => {
    return (
        <div className='ProductDisplay'>
            <div className='Productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={sofa} alt='' />
                    <img src={sofa} alt=''/>
                    <img src={sofa} alt=''/>
                    <img src={sofa} alt=''/>
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={sofa} alt='' />
                </div>
            </div>
            <div className='Productdisplay-right'>
                <h1>Sofa</h1>
                <div className='productdisplay-right-stars'>
                    <BsStarFill style={{ color: "orange" }} />
                    <BsStarFill style={{ color: "orange" }} />
                    <BsStarFill style={{ color: "orange" }} />
                    <BsStarFill style={{ color: "orange" }} />
                    <BsStarFill style={{ color: "rgb(212, 186, 137)" }} />
                    <p>(1258 Reviews)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-new'>$ 1,500</div>
                    <div className='productdisplay-right-price-old'>$ 2,000</div>
                    <div className='productdisplay-right-offer'>21% OFF</div>
                </div>
                <div className='productdisplay-right-description'>
                    A sofa is a piece of furniture typically found in living rooms or lounge areas, designed for seating multiple people comfortably. It usually consists of a sturdy frame, padded cushions, and upholstery covering. Sofas come in various styles, sizes, and shapes, ranging from classic designs to modern, minimalist forms. They often serve as a focal point in a room's decor, offering both functionality and aesthetic appeal.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                    <button onClick={() => { alert("Item Added to Cart !") }}>Add To Cart <BsCart /></button>
                    <Link to={"/checkout"}>
                        <button>Buy Now</button>
                    </Link>
                </div>
                <p className='productdisplay-right-category'>
                    <span>Category: </span>Sofa, Furniture, Living Room
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags: </span>Modern, sleek, minimal
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay