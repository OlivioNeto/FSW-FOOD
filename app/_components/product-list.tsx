import React from 'react'
import ProductItem from './product-item';
import { Prisma } from '@prisma/client';

interface ProductListProps {
    products: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true
                };
            };
        };
    }>[]
}

const ProductList = async ({ products }: ProductListProps) => {
    return (
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden gap-4 px-5">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList