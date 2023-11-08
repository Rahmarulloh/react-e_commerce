import { GridIcon, ListIcon } from "assets/icons";
import Cart from "components/product/productCard";
import React, { useEffect, useState } from "react";
import products from "utils/api";
import { IProduct } from "utils/types";

export default function ProductList() {
  const [productsArr, setProductsArr] = useState<IProduct[]>([]);
  const [isGrid, setGrid] = useState(true);
  const [isList, setList] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const data = await products();
      setProductsArr(data);
    }
    fetchProducts();
  }, []);

  function handleGrid() {
    setGrid(true);
    setList(false);
  }

  function handleList() {
    setGrid(false);
    setList(true);
  }

  return (
    <div className="products-List">
      <div className="products-List_header">
        <div className="products-List_buttons">
          <button
            className={!isGrid ? "products-List_btn" : "products-List_btn active"}
            onClick={handleGrid}
          >
            <GridIcon />
          </button>
          <button
            className={!isList ? "products-List_btn" : "products-List_btn active"}
            onClick={handleList}
          >
            <ListIcon />
          </button>
        </div>

        <p className="products-List_amount">
          {productsArr.length} Products Found
        </p>

        <div className="products-List_line"></div>

        <div className="products-List_sort">
          <label htmlFor="sort" className="products-List_sort-title">
            Sort By
          </label>
          <select name="sort" id="sort-group" className="products-List_sort-group">
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highest)</option>
            <option value="a-z">Name(A-Z)</option>
            <option value="z-a">Name(Z-A)</option>
          </select>
        </div>
      </div>

      <div className={isGrid ? "products-List_grid" : "products-List_list"}>
        {productsArr.map(({ image, name, price, description }) => (
          <Cart
            imgUrl={image}
            title={name}
            price={price}
            isGrid={isGrid}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
