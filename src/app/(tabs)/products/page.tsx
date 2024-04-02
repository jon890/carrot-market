async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return [];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-4xl text-white"></h1>
    </div>
  );
}
