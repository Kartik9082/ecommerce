import React from 'react'
import { useSelector } from 'react-redux'
import ProductList from '../components/ProductList';

const Shop = () => {
  const products = useSelector((store) => store.products);
  return (
    <div className='flex'>
      <div>
        {/* <ProductList title={"Winter Collection"} product={products.nowProducts}/> */}
        <ProductList title={"Winter Collection"} product={products.nowWomenProducts}/>
      </div>
    </div>
  )
}

export default Shop;