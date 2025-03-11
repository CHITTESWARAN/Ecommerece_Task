import React from 'react'
import CoffeeProducts from './CoffeeProducts'
import MealsProduct from './MealsProduct'
import { UserContext } from "../UserContent";

const ProductsListing = () => {
  return (
    <div className='h-auto w-full  px-[8%] py-[2%] '>
        <CoffeeProducts/>
        <MealsProduct/>
    </div>
  )
}

export default ProductsListing