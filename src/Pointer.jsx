import React, { useState } from "react";

export default function Position() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div className="w-full h-full relative">
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="w-12 h-12 bg-red-600 absolute rounded-full left-0 top-0"
        onPointerMove={(e) =>
          setPosition({
            x: e.clientX,
            y: e.clientY,
          })
        }
      ></div>
    </div>
  );
}
