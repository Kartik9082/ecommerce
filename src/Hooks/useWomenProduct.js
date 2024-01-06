import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  addWomenProduct } from '../redux/productSlice';

const useWomenProduct = () => {
    const dispatch = useDispatch();

    const getWomenProduct = async () => {
        const data = await fetch("https://fakestoreapi.com/products/category/women's clothing");
        const json = await data.json();

        dispatch(addWomenProduct(json))
        // console.log(json)
        // console.log("hello")
    }

    useEffect(() => {
        getWomenProduct();
    }, []);
 
}

export default useWomenProduct;