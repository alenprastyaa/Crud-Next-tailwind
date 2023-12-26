"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: string;
};

export default function DeleteProduct(product: Product) {
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();

  async function handleDelete(productId: number) {
    setIsMutating(true);
    await fetch(`http://localhost:3004/product/${productId}`, {
      method: "DELETE",
    });
    setIsMutating(false);
    router.push("/products");
    router.refresh();
  }

  return (
    <div>
      <button
        onClick={() => handleDelete(product.id)}
        className="py-1 px-2 text-sm font-semibold bg-red-600 text-white rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}
