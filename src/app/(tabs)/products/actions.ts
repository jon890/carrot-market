"use server";

import client from "@/libs/prisma-client";

export async function getMoreProducts(page: number) {
  const products = await client.product.findMany({
    select: {
      title: true,
      price: true,
      createdAt: true,
      photo: true,
      id: true,
    },
    skip: page * 1,
    take: 1,
    orderBy: {
      createdAt: "desc",
    },
  });

  return products;
}
