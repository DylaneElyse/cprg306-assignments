"use client";

import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex items-center place-content-center w-1/2 flex-col">
      <h1 className="font-bold text-4xl pb-5 pt-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
