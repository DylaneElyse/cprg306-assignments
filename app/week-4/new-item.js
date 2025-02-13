"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex flex-row items-center px-5 py-3 m-10 bg-neutral-300 rounded">
      <div className="w-20 h-10 bg-neutral-100 border-2 border-neutral-400 rounded text-center m-1">
        <p className="text-2xl font-bold text-neutral-700">{quantity}</p>
      </div>
      <button
        className="bg-rose-400 rounded text-neutral-50 font-bold text-2xl text-center disabled:opacity-50 w-10 h-10 m-1"
        onClick={() => decrement()}
        disabled={quantity === 1}
      >
        -
      </button>
      <button
        className="bg-rose-400 rounded text-neutral-50 font-bold text-2xl text-center disabled:opacity-50 w-10 h-10 m-1"
        onClick={() => increment()}
        disabled={quantity === 20}
      >
        +
      </button>
    </div>
  );
}
