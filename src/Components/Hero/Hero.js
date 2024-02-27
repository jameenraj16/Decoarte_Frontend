import React from 'react'
import sofa from "../Assets/sofa.jpg"
import "./Hero.css"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>New Arrivals</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collections</div>
                    <img src='' alt='' />
                </div>
            </div>
            <div className='hero-right' >
                <img src={sofa} alt='' />
            </div>
        </div>
    )
}

export default Hero