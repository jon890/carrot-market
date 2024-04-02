import ListProduct from "@/components/list-product";
import client from "@/libs/prisma-client";

async function getProducts() {
  const products = await client.product.findMany({
    select: {
      title: true,
      price: true,
      createdAt: true,
      photo: true,
      id: true,
    },
  });

  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-5 p-5">
      {products.map((product) => (
        <ListProduct {...product} key={product.id} />
      ))}
    </div>
  );
}
