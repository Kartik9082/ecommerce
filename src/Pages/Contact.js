import React from "react";
import contactUs from "../assest/contact.jpg";

const Contact = () => {
  return (
    <div className="flex justify-evenly">
      <div className="m-4 p-4 bg-green-300 w-1/3 rounded-lg">
        <h1 className="text-5xl p-4">
          {" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-red-500 relative inline-bloc">
            <span className="relative text-white">Contact us</span>
          </span>
        </h1>
        <div className="grid grid-cols-1">
          <input
            className="p-4 border-2 rounded-md mx-3 my-6 border-b-black"
            type="text"
            placeholder="Enter Name"
          />
          <input
            className="p-4 border-2 rounded-md mx-3 my-6"
            type="text"
            placeholder="Enter Email"
          />
          <textarea className="p-4 border-2 rounded-md mx-3 my-6" 
          placeholder="Message"
          />

          <button className="font-medium bg-red-500 text-white flex justify-center items-center py-2 px-3 mt-3 rounded hover:shadow-xl capitalize transition-all">Send</button>
        </div>
      </div>
      <div>
        <img className="w-[450px] h-auto" src={contactUs} alt="contact" />
      </div>
    </div>
  );
};

export default Contact;
