"use client";

import Item from "./item";
import items from "./items.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let sortedItems = [...items];

  const handleSort = (event) => {
    if (event.target.value === "name") {
      setSortBy("name");
      return;
    }
    if (event.target.value === "quantity") {
      setSortBy("quantity");
      return;
    }
  };

  const sortItems = (sortedItems) => {
    if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      return;
    }
    if (sortBy === "quantity") {
      sortedItems.sort((a, b) => a.quantity - b.quantity);
      return;
    }
  };

  return (
    <div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id} onClick={() => handleSort(item.id)}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
