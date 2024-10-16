import React from "react";

export default function Fedback() {
  const products = [
    {
      id: Math.random() * 100,
      name: "iphone 12 pro max",
      price: 150000,
      color: "black",
    },
    {
      id: Math.random() * 100,
      name: "htc desire 530",
      price: 25000,
      color: "redblue",
    },
    { id: Math.random() * 100, name: "xiomi", price: 52000, color: "black" },
    {
      id: Math.random() * 100,
      name: "iphone 15 pro max",
      price: 180000,
      color: "white",
    },
    { id: Math.random() * 100, name: "One+", price: 47000, color: "black" },
  ];
  return (
    <div>
      {products.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
      {/* <Product name="masud" age="25" />
      <Product name="Eshak" age="22" /> */}
    </div>
  );
}

function Product({ product }) {
  console.log(product);
  return (
    <div className="border-2 p-4 bg-gray-100 rounded-xl my-4 w-2/12">
      <h1 className="text-xl font-bold">Name: {product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Color: {product.color}</p>
      <button className="bg-red-200 rounded py-1 px-6 font-bold mt-2">
        Bay
      </button>
    </div>
  );
}
