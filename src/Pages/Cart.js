import React from "react";
import CartItemList from "../components/CartItemList";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const cratItems = useSelector((store) => store.cart.items);
  //   console.log("Hello", cratItems);
  return (
    <>
      {cratItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex justify-evenly m-4 ">
          <div className="">
            <h1 className="text-2xl">Your Cart</h1>
            <div className="m-2 p-4">
              {cratItems.map((item) => (
                <CartItemList item={item} />
              ))}
              {/* <CartItemList items={cratItems} /> */}
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Summary</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
