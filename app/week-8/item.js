export default function Item({ itemProp, onSelect }) {
  return (
    <section>
      <ul>
        <li className="bg-rose-200 w-80 mb-2 p-4 rounded" onClick={() => onSelect(itemProp)}>
          <p className="font-semibold text-xl capitalize">{itemProp.name}</p>
          <p>{itemProp.quantity}</p>
          <p className="capitalize">{itemProp.category}</p>
        </li>
      </ul>
    </section>
  );
}
