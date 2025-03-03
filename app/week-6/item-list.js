"use client";

import items from "./items.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let sortedItems = [...items];

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const categoryMap = {
    "dairy": [],
    "bakery": [],
    "produce": [],
    "meat": [],
    "canned goods": [],
    "dry goods": [],
    "household": []
  };

  const sortItems = () => {
    if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "quantity") {
      sortedItems.sort((a, b) => a.quantity - b.quantity);
    }
    if (sortBy === "category") {
      sortedItems.reduce((acc, item) => {
        const department = Object.entries(categoryMap).find(
          ([_, items]) => items.includes(item)
        )?.[0];
        
        acc[department] = acc[department] || [];
        acc[department].push(item);
        return acc;
      }, {});
    }
    return sortedItems;
  };

  const SimpleDisplay = () => {
    <ul className="text-lg">
    {sortItems().map((item) => (
      <li className="bg-rose-200 mb-2 py-2 px-4 rounded" key={item.id}>
        <p className="font-semibold text-xl capitalize">{item.name}</p>
        <p>{item.quantity}</p>
        <p className="capitalize">{item.category}</p>
      </li>
    ))}
  </ul>
  };

  const CategoryDisplay = () => {
    <ul className="text-lg">
    {sortItems().map((item) => (
      <li className="bg-rose-200 mb-2 py-2 px-4 rounded" key={item.id}>
        <p className="font-semibold text-xl capitalize">{item.name}</p>
        <p>{item.quantity}</p>
        <p className="capitalize">{item.category}</p>
      </li>
    ))}
  </ul>
  };

  return (
    <div className="flex flex-col items-center">
      <div className="pb-3">
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
      {/* <button
        value={"category"}
        className="bg-rose-400 rounded text-neutral-50 font-bold text-2xl text-center m-1 p-2"
        onClick={(event) => handleSort(event)}
      >
        Category
      </button> */}

      </div>

      <ul className="text-lg">
      {sortItems().map((item) => (
      <li className="bg-rose-200 mb-2 py-2 px-4 rounded" key={item.id}>
        <p className="font-semibold text-xl capitalize">{item.name}</p>
        <p>{item.quantity}</p>
        <p className="capitalize">{item.category}</p>
      </li>
    ))}
  </ul>
    </div>
  );
}
