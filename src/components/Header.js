import React from "react";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-around">
      <img
        className="w-56 h-36 ml-6"
        src="https://www.pyritetechnologies.com/wp-content/uploads/2023/04/client-logo-7.png"
        alt="logo"
      />
      <div className="">
        <ul className="flex py-10">
          <li className="px-5 my-4">Home</li>
          <li className="px-5 my-4">Products</li>
          <li className="px-5 my-4">Shop</li>
          <li className="px-5 my-4">Accessoires</li>
        </ul>
      </div>
      <div className="flex py-10">
        <button className=" px-5 my-4">Login</button>
        <button className=" px-5 my-4 flex">
        <BsCart2 />
          Cart</button>
      </div>
    </div>
  );
};

export default Header;
