import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1 className="text-3xl font-bold">Count: {count}</h1>
      <button
        className="my-2 border-2 rounded-md text-gray-700 font-bold bg-purple-300 py-1 px-6 text-xl"
        onClick={handleIncrease}
      >
        Incress
      </button>
      <button
        className="m-2 border-2 rounded-md text-gray-700 font-bold bg-red-300 py-1 px-6 text-xl"
        onClick={handleDecrease}
        disabled={count === 0}
      >
        Decress
      </button>
    </div>
  );
}
