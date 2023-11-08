import Cart from "components/cart";
import React, { useEffect, useState } from "react";
import products from "utils/api";
import { IProduct } from "utils/types";

export default function ProductList() {
  const [productsArr, setProductsArr] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await products();
      setProductsArr(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="product_list">
      {productsArr.map(({ image, name, price }) => (
        <Cart imgUrl={image} title={name} price={price} />
      ))}
    </div>
  );
}
