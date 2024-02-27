import React from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  return (
    <div>
      <Breadcrums/>
      <ProductDisplay/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product