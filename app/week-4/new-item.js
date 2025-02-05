import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-row items-center px-5 py-3 m-10 bg-neutral-300 rounded">
      <div className="flex-2 w-20 h-10 bg-neutral-100 border-2 border-neutral-400 rounded text-center m-1">
        <p className="text-2xl font-bold text-neutral-700">{count}</p>
      </div>
      <button
        className="flex-1 bg-rose-400 rounded w-10 h-10 text-neutral-50 font-bold text-2xl m-1 text-center disabled:opacity-50"
        onClick={() => increment()}
        disabled={count === 20}
      >
        +
      </button>
      <button
        className="flex-1 bg-rose-400 rounded w-10 h-10 text-neutral-50 font-bold text-2xl m-1 text-center disabled:opacity-50"
        onClick={() => decrement()}
        disabled={count === 1}
      >
        -
      </button>
    </div>
  );
}
