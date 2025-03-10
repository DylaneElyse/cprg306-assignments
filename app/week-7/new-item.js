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
    setName("");
    setQuantity(1);
    setCategory("produce");
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-1/2 bg-neutral-300 p-5 m-5 rounded"
    >
      <div className="flex flex-row text-2xl w-11/12 m-2 justify-between items-center">
        <label className="pl-1">Name</label>
        <input
          className="w-3/4 h-12 bg-neutral-50 border-neutral-400 border-2 rounded ml-2"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        ></input>
      </div>
      <div className="flex flex-row w-11/12 m-2 justify-between items-center">
        <div className="flex flex-row bg-neutral-50 border-2 border-neutral-400 rounded w-48 h-12 items-center">
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
              type="button"
            >
              -
            </button>
            <button
              className="flex-1 bg-rose-400 rounded text-neutral-50 font-bold text-2xl content-center disabled:opacity-50 w-10 h-10 m-1"
              onClick={() => increment()}
              disabled={quantity === 20}
              type="button"
            >
              +
            </button>
          </div>
        </div>
        <select
          className="text-xl text-center m-1 w-48 bg-neutral-50 border-neutral-400 border-2 rounded h-12"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        className="flex-1 bg-rose-400 rounded text-neutral-50 text-xl font-semibold content-center disabled:opacity-50 px-3 py-2 m-1"
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
}
