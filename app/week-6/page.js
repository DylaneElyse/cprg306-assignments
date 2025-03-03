"use client";

import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="font-bold text-4xl ml-4 pb-5 pt-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
