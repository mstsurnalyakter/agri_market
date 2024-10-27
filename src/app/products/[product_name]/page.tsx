import DynamicProduct from "@/components/ProductsPage/DynamicProduct/DynamicProduct";
import React from "react";
import { productCategories } from "../../../lib/productCategories";

type DynamicProductPageProps = {
  params: {
    product_name: string;
  };
};

type Product = {
  id: string;
  product_name: string;
  image: string;
};

const DynamicProductPage: React.FC<DynamicProductPageProps> = ({ params }) => {
  const productData: Product | undefined = productCategories.find(
    (product: Product) => product.product_name === params.product_name
  );

  console.log(productData);

  return (
    <main>
      {productData ? (
        <DynamicProduct productData={productData} />
      ) : (
        <p>Product not found....</p>
      )}
    </main>
  );
};

export default DynamicProductPage;
