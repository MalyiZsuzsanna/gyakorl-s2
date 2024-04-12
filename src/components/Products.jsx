import React from 'react'
import { SingleProduct } from './SingleProduct'
import { products } from '../data'

export const Products = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center gap-5 flex-wrap bg-light'>
        <h3 className='w-100 m-3 '>Our Product</h3>
        {products.map(obj=><SingleProduct key={obj.id}{...obj}/>)}
</div>
    </div>
  )
}

