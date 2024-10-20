import React from 'react';

import {productCategories} from "../../lib/productCategories"
import Category from '../Cards/Category';

const ProductCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productCategories?.length > 0 &&
        productCategories?.map(
          (category: { id: string; product_name: string; image: string }) => (
            <Category key={category?.id} category={category} />
          )
        )}
    </div>
  );
}

export default ProductCategories