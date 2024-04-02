async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 60000));
}

export default async function ProductDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct();
  return <div>Product Dertail! {id}</div>;
}
