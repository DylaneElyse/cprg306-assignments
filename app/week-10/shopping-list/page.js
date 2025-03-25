"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useState, useEffect } from "react";
import { MealIdeas } from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { getItems, addItem } from "../_services/shopping-list-service";

// Main page component that manages the shopping list application
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);

  // Initialize state for tracking the selected ingredient name
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    const itemList = await getItems(user.uid);
    setItems(itemList);
  }

  useEffect(() => {
    loadItems(), [user];
  });

  // Handles adding new items to the shopping list
  const handleAddItem = (item) => {
    addItem(userId = user.uid, item).then((docRef) => {
      setItems([...items, { id: docRef.id, ...item }]);
    });
  };

  const handleItemSelect = (item) => {
    console.log(item.name);
    let name = String(item.name);
    name = name.split(",")[0];
    console.log(name);
    name = name.replace(
      /[\u{1F300}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1FAFF}]/gu,
      ""
    );
    console.log(name);
    name = name.replace(/[0-9\s.,]+$/, "");
    console.log(name);
    name = name.replace(/\s+/g, "_");
    console.log(name);
    setSelectedItemName(name);
  };

  return (
    <main className="flex items-center place-content-center flex-col">
      {user ? (
        <div>
          <button onClick={firebaseSignOut}>Sign Out</button>
          <h1 className="font-bold text-4xl ml-4 pb-5 pt-2">Shopping List</h1>
          <div className="flex flex-row align-top">
            <div className="flex flex-col items-center">
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} className="w-96" />
          </div>
        </div>
      ) : (
        <div>
          <p>Sign in to access the content</p>
          <button onClick={gitHubSignIn}>Sign In with GitHub</button>
        </div>
      )}
    </main>
  );
}
