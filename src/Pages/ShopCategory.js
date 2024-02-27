import React from 'react'
import "./Css/ShopCategory.css"
import { BsArrow90DegDown } from "react-icons/bs"
import Banner from '../Components/Banner/Banner'
import Item from '../Components/Items/Item'


const ShopCategory = () => {
  return (
    <div className='shop-category'>
      <Banner/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <BsArrow90DegDown/>
        </div>
      </div>
      <div className='shopcategory-items'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
      <div className='shopcategory-loadmore'>
            Explore More
      </div>
    </div>
  )
}

export default ShopCategory