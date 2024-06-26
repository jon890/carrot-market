import { formatToTimeAgo, formatToWon } from "@/libs/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function ListProduct({
  id,
  createdAt,
  photo,
  price,
  title,
}: Omit<Product, "description" | "userId" | "updatedAt">) {
  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="relative size-28 overflow-hidden rounded-md">
        <Image src={photo} alt={title} fill className="object" />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {formatToTimeAgo(createdAt)}
        </span>
        <span className="text-lg font-semibold">{formatToWon(price)}</span>
      </div>
    </Link>
  );
}
