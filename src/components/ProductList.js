import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ title, product }) => {

  return (
    <div className="flex  overflow-x-scroll no-scrollbar">
      <div className="justify-center flex flex-wrap p-4 m-4">
        {product &&
          product.map((products) => (
            <ProductCard
              key={products.id}
              title={products?.title}
              price={products.price}
              category={products.category}
              desc={products.description}
              image={products.image}
              id={products}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
