import List from '@/components/shared/List';
import React from 'react'

const ProductsNavLink = () => {
  return (
    <>
      <List
        label="All Products"
        address="/dashboard/products/farmer-information"
      />
    </>
  );
}

export default ProductsNavLink