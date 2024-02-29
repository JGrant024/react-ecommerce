import { useEffect, useState } from "react";

function getData() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.error("Error fetching data:", error));
}

function Products() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>{getData}</h1>
    </div>
  );
}

export default Products;
