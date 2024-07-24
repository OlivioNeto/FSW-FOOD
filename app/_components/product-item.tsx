import { Prisma } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import { calculateProductTotalPrice, formatCurreny } from '../_helpers/price'
import { ArrowDownIcon } from 'lucide-react'

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true
        }
      }
    }
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      <div className="h-[150px] w-full relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className='rounded-lg object-cover shadow-md'
        />

        {product.discountPercentage && (
          <div className="absolute top-2 left-2 gap-[2px] bg-primary py-[2px] px-2 text-white rounded-full flex items-center">
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">{product.discountPercentage}%</span>
          </div>
        )}

      </div>

      <div>
        <h2 className="truncate text-sm">{product.name}</h2>
        <div className="flex gap-1 items-center">
          <h3 className="font-semibold">
            {formatCurreny(calculateProductTotalPrice(product))}
          </h3>

          {product.discountPercentage > 0 && (
            <span className="text-muted-foreground line-through text-xs">
              {formatCurreny(Number(product.price))}
            </span>

          )}
        </div>

        <span className="block text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>

      </div>
    </div>
  );
};

export default ProductItem