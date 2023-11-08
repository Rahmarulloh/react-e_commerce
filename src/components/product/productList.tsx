import { GridIcon, ListIcon } from "assets/icons";
import Cart from "components/cart";
import React, { useEffect, useState } from "react";
import products from "utils/api";
import { IProduct } from "utils/types";

export default function ProductList() {
  const [productsArr, setProductsArr] = useState<IProduct[]>([]);
  const [isGrid, setGrid] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const data = await products();
      setProductsArr(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <div className="products_header">
        <div className="products_buttons">
          <button className={!isGrid ? "products_btn" : "products_btn active"}>
            <GridIcon />
          </button>
          <button className={!isGrid ? "products_btn" : "products_btn active"}>
            <ListIcon />
          </button>
        </div>

        <span className="products_amount">
          {productsArr.length} Products Found
        </span>

        <div className="products_line"></div>

        <div className="products_sort">
          <label htmlFor="sort" className="products_sort-title">
            Sort By
          </label>
          <select name="sort" id="sort-group" className="products_sort-group">
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highest)</option>
            <option value="a-z">Name(A-Z)</option>
            <option value="z-a">Name(Z-A)</option>
          </select>
        </div>
      </div>

      <div className="products_list">
        {productsArr.map(({ image, name, price }) => (
          <Cart imgUrl={image} title={name} price={price} />
        ))}
      </div>
    </div>
  );
}
