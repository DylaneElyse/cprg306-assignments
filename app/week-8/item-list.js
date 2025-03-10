"use client";

import { useState } from "react";
import Item from "./item";

//  ItemList component that displays and manages a sorted list of items
export default function ItemList({items, onItemSelect}) {
  // Initialize state for tracking current sort criterion
  const [sortBy, setSortBy] = useState("name");
  
  // Create a copy of the items array to avoid mutating the original data
  let sortedItems = [...items];

  // Handles sort criterion selection
  const handleSort = (event) => {
    // Update the sort criterion based on the selected button
    setSortBy(event.target.value);
  };


  // Sorts items based on the current sort criterion
  const sortItems = () => {
    // Sort items by name alphabetically using localeCompare for proper string comparison
    if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    }
    // Sort items by quantity numerically
    if (sortBy === "quantity") {
      sortedItems.sort((a, b) => a.quantity - b.quantity);
    }
    return sortedItems;
  };

  return (
    <div>
      {/* Sort control buttons */}
      <div className="flex justify-center mb-2">
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
      </div>

      <div className="flex flex-col items-center">
      {sortItems().map((item) => (
          <Item key={item.id} itemProp={item} onSelect={onItemSelect} />        
          ))}
      </div>
    </div>
  );
}