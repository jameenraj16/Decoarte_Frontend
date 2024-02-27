import React from 'react'
import "./RelatedProducts.css"
import Item from "../Items/Item"

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-item'>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default RelatedProducts