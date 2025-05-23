"use client";

import { useState } from "react";

/**
 * ItemList component that displays and manages a sorted list of items
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of items to display and sort
 * @returns {JSX.Element} The rendered item list with sorting controls
 */
export default function ItemList({items}) {
  // Initialize state for tracking current sort criterion
  const [sortBy, setSortBy] = useState("name");
  
  // Create a copy of the items array to avoid mutating the original data
  let sortedItems = [...items];

  /**
   * Handles sort criterion selection
   * @param {Object} event - Event object from the button click
   */
  const handleSort = (event) => {
    // Update the sort criterion based on the selected button
    setSortBy(event.target.value);
  };

  /**
   * Sorts items based on the current sort criterion
   * @returns {Array} The sorted array of items
   */
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

      <ul className="text-lg">
        {sortItems().map((item) => (
          <li 
            className="bg-rose-200 w-80 mb-2 p-4 rounded" 
            key={item.id}
          >
            <p className="font-semibold text-xl capitalize">{item.name}</p>
            {/* Item quantity */}
            <p>{item.quantity}</p>
            {/* Item category */}
            <p className="capitalize">{item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}