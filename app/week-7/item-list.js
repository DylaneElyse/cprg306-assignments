"use client";

import items from "./items.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let sortedItems = [...items];

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const sortItems = () => {
    if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "quantity") {
      sortedItems.sort((a, b) => a.quantity - b.quantity);
    }
    return sortedItems;
  };

  return (
    <div>
      <button
        value={"name"}
        className="bg-rose-400 rounded text-neutral-50 font-bold text-2xl text-center m-1 p-2"
        onClick={(event) => handleSort(event)}
      >
        Name
      </button>
      <button
        value={"quantity"}
        className="bg-rose-400 rounded text-neutral-50 font-bold text-2xl text-center m-1 p-2"
        onClick={(event) => handleSort(event)}
      >
        Quantity
      </button>

      <ul className="text-lg">
        {sortItems().map((item) => (
          <li className="bg-rose-200 w-1/5 mb-2 p-4 rounded" key={item.id}>
            <p className="font-semibold text-xl">{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
