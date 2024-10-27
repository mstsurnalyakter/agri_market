"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  category: {
    id: string;
    product_name: string;
    image: string;
  };
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { product_name,image } = category || {};

  return (
    <div className="card card-compact">
      <figure>
        <Image
          src={image}
          alt="Find Your Next Opportunity"
          className="w-full h-full object-cover"
          width={1020}
          height={100}
        />
      </figure>
      <h2 className="bg-primary text-center capitalize py-8 text-white font-bold text-3xl">
        {product_name}
      </h2>
      <div className="card-body">
        <div className="card-actions justify-center">
          {/* <button className="btn-outline btn-">Buy Now</button> */}
          <Link href={`/products/${product_name}`}>
            <button className="btn btn-outline btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
