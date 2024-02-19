import React from 'react'
import { useSelector } from 'react-redux'
import ProductList from '../components/ProductList';

const Products = () => {
  const products = useSelector((store) => store.products);

 

  return (
    <div className='flex'>
      <div>
        <ProductList title={"Winter Collection"} product={products.nowProducts}/>
        
        {/* <ProductList title={"Winter Collection"} product={products.nowWomenProduct}/> */}
      </div>
    </div>
  )
}

export default Products;