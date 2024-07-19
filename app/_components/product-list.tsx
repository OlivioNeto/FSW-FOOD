import React from 'react'
import { db } from '../_lib/prisma'
import ProductItem from './product-item';

const ProductList = async () => {
    const products = await db.product.findMany({
        where: {
            discountPercentage: {
                gt: 0,
            },
        },
    });

    return (
        <div className="overflow-x-scroll">
            {products.map((product) =>(
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ProductList