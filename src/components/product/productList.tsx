import { useState } from "react";
import { IProductList } from "utils/types";
import { GridIcon, ListIcon } from "assets/icons";
import Cart from "components/product/productCard";

export default function ProductList(props: IProductList) {
  const [isGrid, setGrid] = useState(true);

  function handleGrid() {
    setGrid(true);
  }

  function handleList() {
    setGrid(false);
  }

  return (
    <div className="products-List">
      <div className="products-List_header">
        <div className="products-List_buttons">
          <button
            className={
              isGrid ? "products-List_btn active" : "products-List_btn"
            }
            onClick={handleGrid}
          >
            <GridIcon />
          </button>
          <button
            className={
              !isGrid ? "products-List_btn active" : "products-List_btn"
            }
            onClick={handleList}
          >
            <ListIcon />
          </button>
        </div>

        <p className="products-List_amount">
          {props.productList.length} Products Found
        </p>

        <div className="products-List_line"></div>

        <div className="products-List_sort">
          <label htmlFor="sort" className="products-List_sort-title">
            Sort By
          </label>
          <select
            name="sort"
            id="sort-group"
            className="products-List_sort-group"
            onChange={props.handleSort}
          >
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highest)</option>
            <option value="a-z">Name(A-Z)</option>
            <option value="z-a">Name(Z-A)</option>
          </select>
        </div>
      </div>

      {props.productList.length === 0 ? (
        <h2>Sorry, no products matched your search...</h2>
      ) : (
        <div className={isGrid ? "products-List_grid" : "products-List_list"}>
          {props.productList.map(({ image, name, price, description }) => (
            <Cart
              imgUrl={image}
              title={name}
              price={price}
              isGrid={isGrid}
              description={description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
