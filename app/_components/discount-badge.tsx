import { Product } from '@prisma/client'
import { ArrowDownIcon } from 'lucide-react'
import React from 'react'

interface DiscountBadgeProps{
    product: Pick<Product, "discountPercentage">
}

const DiscountBadge = ({product}: DiscountBadgeProps) => {
    return (
        <div>
            <div className="top-2 left-2 gap-[2px] bg-primary py-[2px] px-2 text-white rounded-full flex items-center">
                <ArrowDownIcon size={12} />
                <span className="text-xs font-semibold">{product.discountPercentage}%</span>
            </div>
        </div>
    )
}

export default DiscountBadge