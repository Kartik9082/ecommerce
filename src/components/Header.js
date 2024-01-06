import React from "react";
import { BsCart2 } from "react-icons/bs";
import Logo from "../assest/logo.png";
import { Link } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import useWomenProduct from "../Hooks/useWomenProduct";

const Header = () => {
  useProducts();
  useWomenProduct();
  return (
    <div className="flex justify-around m-0">
      <Link to="/home"><img className="w-44 h-6 mt-14" src={Logo} alt="logo" /></Link>
      <div className="">
        <ul className="flex py-10 text-2xl">
          <li className="px-5 my-4">
            <Link to="/home">Home</Link>{" "}
          </li>

          <li className="px-5 my-4">
            <Link to="/mens">Mens</Link>
          </li>
          <li className="px-5 my-4">
            <Link to="/womens">Womens</Link>
          </li>
          <li className="px-5 my-4">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <ul className="flex py-10 text-2xl">
          <li className="px-5 my-4">
            <Link to="/login">Login</Link>{" "}
          </li>
          <li className="px-5 my-0 flex items-center">
            <Link to="/cart">
              {" "}
              🛒Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
