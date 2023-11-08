import { useState, useEffect } from "react";
import { IProduct } from "utils/types";
import products from "utils/api";
import ProductList from "components/product/productList";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ProductList />
    </div>
  );
}

export default App;
