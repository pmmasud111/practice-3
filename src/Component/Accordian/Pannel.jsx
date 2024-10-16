import React from "react";

export default function Pannel({ children, isActive, onShow }) {
  return (
    <div className="border-2 border-black rounded-md p-4">
      <h1 className="text-2xl">Paid Course</h1>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          className="bg-gray-400 text-white rounded mt-2 py-2 px-6 font-bold"
          onClick={onShow}
        >
          Show Details
        </button>
      )}
    </div>
  );
}
