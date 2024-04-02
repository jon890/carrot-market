"use server";

import client from "@/libs/prisma-client";
import { getSession } from "@/libs/session";

export default async function deleteProductAction(productId: number) {
  const session = await getSession();
  const userId = session.id;

  if (!userId) {
    return false;
  }

  const deleted = await client.product.delete({
    where: {
      id: productId,
      userId,
    },
  });

  if (!deleted) {
    return false;
  }

  return true;
}
