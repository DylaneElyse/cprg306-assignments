export default function Item({ name, quantity, category }) {
  return (
    <section className="bg-rose-100 border border-rose-200 m-4 p-4 w-full max-w-xs">
      <h3 className="font-semibold text-xl">{name}</h3>
      <p className="text-xl">To purchase: {quantity}</p>
      <p className="text-xl">From the {category} section</p>
    </section>
  );
}
