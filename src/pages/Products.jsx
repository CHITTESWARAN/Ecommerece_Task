import React, { useContext } from 'react';
import { UserContext } from '../UserContent';
import Banner from './Banner';
import ProductsListing from './ProductsListing';

const Products = () => {
  const userContext = useContext(UserContext);
  const { Name } = userContext;

  return (
    <>
    <div className='my-4 w-full mb-4'>
    <Banner/>
    <ProductsListing/>
    </div>
   
    </>
   
  );
};

export default Products;
