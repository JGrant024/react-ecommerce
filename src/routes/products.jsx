import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function data() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.error("Error fetching data:", error));

  return { data };
}

const displayData = [
  {category: "Men's Clothing", Image: ""}
]

function Products() {
  useEffect(() => {
    data();
  }, []);
``
  return (
    <>
      <h2>Mens Clothing</h2>
      <ul></ul>
    </>
  );
}

export default Products;
