import React from "react";
import { useParams } from "react-router-dom";

import ShopCard from "../../components/ShopCard";
import ShopNav from "../../components/ShopNav";
import { useCart } from "../../contexts/cartContext";

const ShopPage = () => {
  const { category } = useParams();
  const { products, addToCart, checkIfItemIsInCart } = useCart()
  const currentCategoryProducts = category ? products.filter(product => product.category === category) : products

  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="flex w-full max-w-[1400px] flex-col gap-8 px-6 py-8 md:flex-row md:px-8 lg:px-14 ">
        <ShopNav />

        <div className="w-full bg-white p-6">
          <h2 className="text-left text-3xl font-semibold">
            {category ? category : "Wszystkie produkty"}
          </h2>
          <main className="mt-12 flex flex-col gap-10 text-lg">
            {currentCategoryProducts ? (
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
            }
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
