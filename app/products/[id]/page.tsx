import { formatCurreny } from "@/app/_helpers/price";
import { db } from "@/app/_lib/prisma";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true
    }
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/* imagem */}
      <ProductImage product={product} />

      {/* Titulo e preço*/}
      <div className="p-5">
        {/* restaurante */}
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-6 w-6">
            <Image
              src={product.restaurant.imageUrl}
              alt={product.restaurant.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground">{product.restaurant.name}</span>
        </div>

        {/* nome do produto */}
        <h1 className="text-xl font-semibold mb-2 mt-1">{product.name}</h1>

        {/* preço do produto e quantidade*/}
        <div className="flex justify-between">

          {/* preço */}
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">
              {formatCurreny(Number(product.price))}
            </h2>

            {product.discountPercentage && (
              <div className="absolute top-2 left-2 gap-[2px] bg-primary py-[2px] px-2 text-white rounded-full flex items-center">
                <ArrowDownIcon size={12} />
                <span className="text-xs font-semibold">{product.discountPercentage}%</span>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductPage