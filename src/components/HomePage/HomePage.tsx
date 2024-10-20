import React from 'react'
import Banner from './Banner'
import ProductCategories from './ProductCategories'

const HomePage = () => {
  return (
    <div className='space-y-11'>
        <Banner/>
        <ProductCategories/>
    </div>
  )
}

export default HomePage