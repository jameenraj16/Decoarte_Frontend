import React from 'react'
import { Link } from "react-router-dom"
import sofa from "../Assets/sofa.jpg"
import "./Item.css"

const Item = (props) => {
  return (
    <div onClick={() => window.scrollTo(0, 0)} className='item'>
      <Link to={'/product/id'}><img src={sofa} alt='' /></Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
          $ 1,500
        </div>
        <div className='item-price-old'>
          $ 2,000
        </div>
      </div>
    </div>
  )
}

export default Item