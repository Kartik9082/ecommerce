import React from "react";
import ProductCard from "./ProductCard";

import ShimmerCard from "../components/Shimmer";

const ProductList = ({ title, product }) => {
  if (product === null) return <ShimmerCard />;

  return (
    <div className="flex  overflow-x-scroll no-scrollbar">
      <div className="justify-center flex flex-wrap p-4 m-4">
        {product &&
          product.map((products) => (
            <ProductCard
              key={products.id}
              id={products.id}
              productId={products}
              title={products?.title}
              price={products.price}
              category={products.category}
              desc={products.description}
              image={products.image}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
