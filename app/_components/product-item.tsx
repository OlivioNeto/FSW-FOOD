import { Product } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface ProductItemProps{
    product: Product
}

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <div className="space-y-2 w-[150px]">
        <div className="h-[150px] w-full relative">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              className='object-cover rounded-lg shadow-md'
            />
        </div>
    </div>
  )
}

export default ProductItem