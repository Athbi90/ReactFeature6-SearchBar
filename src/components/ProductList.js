// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = () => {
  let [query, setQuery] = useState("");
  const filteredList = products.filter((searchKey) =>
    searchKey.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filteredList);

  const productList = filteredList.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar search={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
