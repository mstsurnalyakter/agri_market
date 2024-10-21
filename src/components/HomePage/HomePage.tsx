import React from 'react'
import Banner from './Banner'
import ProductCategories from './ProductCategories'
import Testimonials from './Testimonials'

const HomePage = () => {
  return (
    <div className='space-y-11'>
        <Banner/>
        <ProductCategories/>
        <Testimonials/>
    </div>
  )
}

export default HomePage