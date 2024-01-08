import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className=" container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
      <div className="flex justify-center">
        <img
          src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
          alt="emptyCart"
          className="w-3/12 py-2 px-2 m-4"
        />
      </div>
      <div className="container py-10 px-10 flex flex-col items-center">
        <h1 className="text-5xl py-2 px-2 m-4 flex justify-center">
          Your Cart is{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-bloc">
            <span className="relative text-white">Empty!</span>
          </span>
        </h1>
        <p className="text-xl py-2 px-2 m-4 flex justify-center">
          Must add items on the cart before proceed to check out.
        </p>
        <button className="font-medium bg-red-500 text-white flex justify-center items-center py-2 px-4 mt-3 rounded hover:shadow-xl capitalize transition-all">
          <Link to="/home">Continue Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
