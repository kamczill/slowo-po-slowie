import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { products } from "../../data/products";
import { useCart } from "../../contexts/cartContext";

const ProductDetailPage = () => {
  const [isOpenDesc, setIsOpenDesc] = useState(false);
  const { id } = useParams();
  const currentProduct = products.find(product => product.id === id)
  const { addToCart, checkIfItemIsInCart } = useCart()
  const [isProductInCart, setIsProductInCart] = useState(checkIfItemIsInCart(currentProduct))

  const handleToggleDesc = () => {
    setIsOpenDesc(!isOpenDesc);
  };

  const handleAddItemToCart = () => {
    addToCart(currentProduct)
    setIsProductInCart(true)
  }

  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="font-ms flex max-w-[1160px] flex-col items-center justify-center gap-10 p-5 py-8">
        <div className={`flex flex-col gap-5 lg:flex-row`}>
          <div className="max-w-[400px]">
            <img src={currentProduct?.coverImg} alt={currentProduct?.title} />
          </div>
          <div className="flex max-w-[400px] flex-col gap-4 lg:max-w-[700px] lg:p-5">
            <h3 className="pointer text-xl font-bold lg:hover:underline lg:hover:decoration-2">
              {currentProduct?.title}
            </h3>
            <p>
              {currentProduct?.excerpt}
            </p>
            <button
              onClick={handleToggleDesc}
              className="inline-flex items-center gap-2 text-left"
            >
              Pełny opis
              {isOpenDesc ? <IoChevronUp /> : <IoChevronDown />}
            </button>
            <p className="text-xl font-bold">100.00 zł</p>
            <button
              type="submit"
              className={`w-full rounded-md ${isProductInCart ? 'bg-[#3030307a]': 'bg-[#303030]'} p-2 py-3  text-center text-white md:max-w-[350px]`}
              onClick={handleAddItemToCart}
              disabled={isProductInCart}
            >
              {isProductInCart ? 'Produkt jest w koszyku!': 'Dodaj do koszyka'}
            </button>
          </div>
        </div>
        {isOpenDesc && (
          <div className="flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: currentProduct?.description}} />
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
