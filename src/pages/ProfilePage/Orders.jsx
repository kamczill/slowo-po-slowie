import React from 'react'
import OrderCard from '../../components/OrderCard'

const Orders = () => {
  return (
    <div className="w-full bg-white p-6">
      <h2 className="text-left text-3xl font-semibold md:px-14">
        Moje zamówienia
      </h2>
      <main className="mt-12 flex flex-col gap-10 text-lg">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        {/* {currentCategoryProducts ? (
          currentCategoryProducts.map(product => (
            <ShopCard
              key={product.id} 
              id={product.id}
              img={product.coverImg}
              title={product.title}
              excerpt={product.excerpt}
              price={product.price}
              product={product}
              addToCart={addToCart}
              checkIfItemIsInCart={checkIfItemIsInCart}
            />
          ))
          ): ''
        } */}
      </main>
    </div>
  )
}

export default Orders