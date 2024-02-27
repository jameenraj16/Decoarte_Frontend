import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our news letter and stay update.</p>
      <div>
        <input type='' placeholder='Enter Your E-Email...' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter