import groceries from "./items.json";

export default function Item({ name, quantity, category }) {
  return (
    <section>
      <ul>
        {groceries.map((grocery) => (
          <li
            key={grocery.id}
            className="bg-rose-100 border border-rose-200 m-4 p-4 w-full max-w-xs"
          >
            {grocery.name} {grocery.quantity} {grocery.category}
          </li>
        ))}
      </ul>
      <h3 className="font-semibold text-xl">{name}</h3>
      <p className="text-xl">To purchase: {quantity}</p>
      <p className="text-xl">From the {category} section</p>
    </section>
  );
}
