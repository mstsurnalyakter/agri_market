import React from 'react'
import Banner from './Banner'
import ProductCategories from './ProductCategories'
import Testimonials from './Testimonials'
import NavBar from '../shared/NavBar'
import Footer from '../shared/Footer'

const HomePage = () => {
  return (
    <div className="space-y-11">
      <NavBar />
      <main className="min-h-[calc(100vh-368px)] mx-auto max-w-7xl font-poppins px-2 space-y-11">
        <Banner />
        <ProductCategories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage