import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addProductInfo} from '../redux/productSlice'
import { useParams } from "react-router-dom";

const useProductInfo = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const getProductInfo = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products/' + id);
    
            if (!data.ok) {
                throw new Error(`HTTP error! Status: ${data.status}`);
            }
    
            const result = await data.json();
            console.log(result);
            dispatch(addProductInfo(result));
        } catch (error) {
            console.error('Error fetching product info:', error);
        }
    };
    

    useEffect(() => {
        getProductInfo();
    }, []);
 
}

export default useProductInfo;