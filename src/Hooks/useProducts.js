import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addProducts } from '../redux/productSlice';

const useProducts = () => {
    const dispatch = useDispatch();

    const getProducts = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const json = await data.json();

        dispatch(addProducts(json))
        // console.log(json)
        // console.log("hello")
    }

    useEffect(() => {
        getProducts();
    }, []);
 
}

export default useProducts;