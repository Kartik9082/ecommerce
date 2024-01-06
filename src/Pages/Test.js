import { useEffect } from "react";

const Test = () => {
    const getProducts = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();
    
        console.log(json);
        // console.log("hello")
      };
      useEffect(() => {
        getProducts();
      }, []);
    };

export default Test
