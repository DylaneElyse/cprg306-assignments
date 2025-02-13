"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { name, quantity, category };
    console.log(item);
    alert(`${item.name} ${item.quantity} ${item.category} added!`);
  };

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
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="m-1 text-xl w-96">
        <label>Name</label>
        <input
          className="w-80"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        ></input>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row bg-neutral-100 border-2 border-neutral-400 rounded m-1 w-48">
          <div className="content-center">
            <p className="w-20 flex-2 text-2xl text-center font-bold text-neutral-700 m-1 pl-1">
              {quantity}
            </p>
          </div>
          <div>
            <button
              className="flex-1 bg-rose-400 rounded text-neutral-50 font-bold text-2xl content-center disabled:opacity-50 w-10 h-10 m-1"
              onClick={() => decrement()}
              disabled={quantity === 1}
            >
              -
            </button>
            <button
              className="flex-1 bg-rose-400 rounded text-neutral-50 font-bold text-2xl content-center disabled:opacity-50 w-10 h-10 m-1"
              onClick={() => increment()}
              disabled={quantity === 20}
            >
              +
            </button>
          </div>
        </div>
        <select
          className="text-xl text-center m-1 w-48"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        className="flex-1 bg-rose-400 rounded text-neutral-50 font-semibold content-center disabled:opacity-50 p-1 m-1"
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
}
