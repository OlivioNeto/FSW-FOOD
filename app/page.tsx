import React from 'react'
import Header from './_components/header'
import Search from './_components/search'
import CategoryList from './_components/category-list'
import Image from 'next/image'
import ProductList from './_components/product-list'

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/promobanner.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vm"
        />
      </div>

      <ProductList />
    </>
  )
}

export default Home