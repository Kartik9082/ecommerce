import React from "react";

const ProductCard = ({ title, price, category, desc, image }) => {
  const maxLength = 100;
  const shortenedDesc = desc.length > maxLength
          ? desc.slice(0, maxLength - 3) + '...'
          : desc;
  return (
    <div class="m-8 max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
  <img class="w-auto h-40 object-cover object-center" src={image} alt="Product "/>

  <div class="p-4">
    <div class="flex items-baseline mb-2">
      <span class="bg-green-200 text-green-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">New</span>
      <p class="ml-2 text-gray-600 uppercase text-xs font-medium">{category}</p>
    </div>

    <h2 class="text-lg font-semibold text-gray-800 hover:text-indigo-500 transition duration-300">
      <a href="/" className="hover:underline">{title}</a>
    </h2>

    <p class="text-gray-700 mb-2 leading-relaxed">{shortenedDesc}</p>

    <div class="flex items-baseline mb-1">
      <span class="text-lg font-semibold text-gray-900">${price}9</span>
      <span class="ml-2 text-sm text-gray-500">Free Shipping</span>
    </div>

    <div class="flex items-center space-x-2">
      <button class="bg-indigo-500 text-white rounded-full py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
        Add to Cart
      </button>
      <button class="text-gray-600 hover:text-gray-800 focus:outline-none">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </button>
    </div>
  </div>
</div>


  );
};

export default ProductCard;
