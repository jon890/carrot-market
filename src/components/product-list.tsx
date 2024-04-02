"use client";

import { getInitialProducts } from "@/app/(tabs)/products/page";
import { Prisma } from "@prisma/client";
import ListProduct from "./list-product";
import { useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/actions";

type Props = {
  initialProducts: Prisma.PromiseReturnType<typeof getInitialProducts>;
};

export default function ProductList({ initialProducts }: Props) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  async function onLoadMoreClick() {
    setIsLoading(true);
    const newProducts = await getMoreProducts(page + 1);
    if (newProducts.length !== 0) {
      setPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...newProducts]);
    } else {
      setIsLastPage(true);
    }
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col gap-5 p-5">
      {products.map((product) => (
        <ListProduct {...product} key={product.id} />
      ))}
      {!isLastPage && (
        <button
          className="mx-auto w-fit rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold hover:opacity-90 active:scale-95"
          disabled={isLoading}
          onClick={onLoadMoreClick}
        >
          {isLoading ? "로딩 중" : "Load more"}
        </button>
      )}
    </div>
  );
}
