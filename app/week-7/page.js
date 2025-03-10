"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

/**
 * Main page component that manages the shopping list application
 * @returns {JSX.Element} The rendered shopping list interface
 */
export default function Page() {
  // Initialize items state from the JSON data
  let items = [...itemsData];

    /**
   * Handles adding new items to the shopping list
   * @param {Object} item - The new item to add
   * @param {string} item.id - Unique identifier for the item
   * @param {string} item.name - Name of the item
   * @param {number} item.quantity - Quantity of the item
   * @param {string} item.category - Category of the item
   */
const handleAddItem = (item) => {
  // Add the new item to the existing items array
  items.push(item);
}

  return (
    <main className="flex items-center place-content-center flex-col">
      <h1 className="font-bold text-4xl ml-4 pb-5 pt-2">Shopping List</h1>
      {/* Component for adding new items to the list */}
      <NewItem onAddItem={handleAddItem} />
      {/* Component for displaying the current list of items */}
      <ItemList items={items} />
    </main>
  );
}
