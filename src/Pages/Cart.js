import React from "react";
import CartItemList from "../components/CartItemList";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("Hello", cratItems);
  // console.log("Cart Items:", cartItems);

  // if(cratItems.length === 0 ) return <ShimmerCard />

// ...

return (
  <>
    {cartItems ? ( // Add this check
      cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex justify-evenly m-4">
          <div className="">
            <h1 className="text-2xl">Your Cart</h1>
            <div className="m-2 p-4">
              {cartItems.map((item) => (
                <CartItemList key={item?.id} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Summary</h1>
          </div>
        </div>
      )
    ) : (
      <p>Loading...</p> // Add a loading indicator or handle the loading state as needed
    )}
  </>
);

};

export default Cart;
