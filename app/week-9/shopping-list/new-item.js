"use client";

import { useState } from "react";

/**
 * NewItem component for adding new items to the shopping list
 * @param {Object} props - Component props
 * @param {Function} props.onAddItem - Callback function to add new items
 * @returns {JSX.Element} The rendered form for adding new items
 */
export default function NewItem({onAddItem}) {
  // Initialize state for form data using a single object
  const [itemData, setItemData] = useState({
    name: "",
    quantity: 1,
    category: "produce",
  });

  /**
   * Handles form submission
   * @param {Object} event - Form submission event
   */
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Create new item with random ID and current form data
    const newItem = {
      id: Math.random().toString(36),
      ...itemData,
    };
    
    // Log the new item for debugging
    console.log(newItem);
    
    // Call parent's onAddItem callback with the new item
    onAddItem(newItem);
    
    // Reset form fields after submission
    setItemData({
      name: "",
      quantity: 1,
      category: "produce",
    });
  };

  /**
   * Increments the quantity value
   * Limited to maximum value of 20
   */
  function increment() {
    if (itemData.quantity < 20) {
      setItemData({ ...itemData, quantity: itemData.quantity + 1 });
    }
  }

  /**
   * Decrements the quantity value
   * Limited to minimum value of 1
   */
  function decrement() {
    if (itemData.quantity > 1) {
      setItemData({ ...itemData, quantity: itemData.quantity - 1 });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-neutral-300 p-5 m-5 mb-2 rounded"
    >
      {/* Name input field with label */}
      <div className="flex flex-row text-2xl w-11/12 m-2 justify-between items-center">
        <label className="pl-1">Name</label>
        <input
          className="w-3/4 h-12 bg-neutral-50 border-neutral-400 border-2 rounded ml-2"
          type="text"
          id="name"
          value={itemData.name}
          onChange={(event) => setItemData({...itemData, name: event.target.value})}
          required
        />
      </div>

      {/* Quantity and category controls */}
      <div className="flex flex-row w-11/12 m-2 justify-between items-center">
        <div className="flex flex-row bg-neutral-50 border-2 border-neutral-400 rounded w-48 h-12 items-center">
          <div className="content-center">
            <p className="w-20 flex-2 text-2xl text-center font-bold text-neutral-700 m-1 pl-1"
                id="quantity"
                type="number"
                value={itemData.quantity}
                onChange={(event) => setItemData({...itemData, quantity: event.target.value})}>
              {itemData.quantity}
            </p>
          </div>
          <div className="flex flex-row">
            {/* Decrement button */}
            <button
              className="flex-1 bg-rose-400 rounded text-neutral-50 font-bold text-2xl content-center disabled:opacity-50 w-10 h-10 m-1"
              onClick={() => decrement()}
              disabled={itemData.quantity === 1}
              type="button"
            >
              -
            </button>
            {/* Increment button */}
            <button
              className="flex-1 bg-rose-400 rounded text-neutral-50 font-bold text-2xl content-center disabled:opacity-50 w-10 h-10 m-1"
              onClick={() => increment()}
              disabled={itemData.quantity === 20}
              type="button"
            >
              +
            </button>
          </div>
        </div>
        {/* Category dropdown */}
        <select
          className="text-xl text-center m-1 w-48 bg-neutral-50 border-neutral-400 border-2 rounded h-12"
          id="category"
          value={itemData.category}
          onChange={(event) => setItemData({...itemData, category: event.target.value})}
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

      {/* Submit button */}
      <button
        className="flex-1 bg-rose-400 rounded text-neutral-50 text-xl font-semibold content-center disabled:opacity-50 px-3 py-2 m-1"
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
}