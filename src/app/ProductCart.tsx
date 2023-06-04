'use client'

import React, { FC } from 'react'
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import { IProduct } from './page';


const ProductCart:FC<{item:IProduct}> = ({item}) => {

const handleAddToCart =async () => {
    const res =  await fetch("/api/cart",{
        method:"POST",
        body:JSON.stringify({
            product_id:item._id
        })
    })
    const result =await res.json()
    return result

}

  return (
    <div>
        <Image
            src={urlForImage(item.image).url()}
            width={200}
            height={200}
            className='max-h-[100px] object-cover object-center'
            alt='product' />
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
            <button onClick={handleAddToCart} className='border py-2 px-6 rounded bg-blue-600 text-white'>Add To Cart</button>
    </div>
  )
}

export default ProductCart
