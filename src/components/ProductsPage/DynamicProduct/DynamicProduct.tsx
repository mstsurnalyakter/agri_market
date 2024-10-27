import Footer from '@/components/shared/Footer';
import NavBar from '@/components/shared/NavBar';
import React from 'react';
import DynamicProductBanner from './DynamicProductBanner';

type Product = {
  id: string;
  product_name: string;
  image: string;
};

type DynamicProductProps = {
  productData: Product;
};

const DynamicProduct: React.FC<DynamicProductProps> = ({ productData }) => {
    const {product_name,id, image} = productData ;
  return (
    <div className="space-y-11">
      <NavBar />
      <main className="min-h-[calc(100vh-368px)] space-y-11 mx-auto max-w-7xl font-poppins px-2">
        <DynamicProductBanner image={image} />
        {/* <Banner />
        <ProductCategories />
        <Testimonials /> */}
        <p>kkkkkkkkkkkkkkkk</p>
      </main>
      <Footer />
    </div>
  );
};

export default DynamicProduct;
