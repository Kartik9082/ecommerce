import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const CartItemList = ({ item }) => {
  const dispatch = useDispatch();
  // console.log(item);
  // if (!item) {
  //   return null; // or render a placeholder, an error message, or handle it in some way
  // }

  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };
  const maxLength = 20;
  const shortTitle =
    item?.title?.length > maxLength
      ? item?.title?.slice(0, maxLength - 3) + "..."
      : item?.title;

  return (
    <div className="flex">
      <div className="flex bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ">
        <div className="p-4">
          <img className="w-10" src={item?.image} alt="productImage" />
        </div>
        <div>
          <h1 className="p-6 ">{shortTitle}</h1>
        </div>
        <div className="p-6">
          <span>$-</span>
          {item?.price}
        </div>
        <div className="p-7  text-gray-600 uppercase text-xs font-medium">
          {item?.category}
        </div>
        <div className="p-6">
        <button
          className="p-2 bg-slate-700 rounded-md"
          onClick={() => handleDelete(item)}
        >
          ❌
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default CartItemList;
