import { IFilter } from "utils/types";
import Option from "./option";

export default function Sidebar({
  price,
  colorList,
  companyList,
  handleColor,
  handlePrice,
  handleClear,
  handleSearch,
  categoryList,
  handleCompany,
  handleCategory,
  handleShipping,
}: IFilter) {
  const stringPrice = `${price}`;
  let firstNumber = "";
  let suffixPrice = "";
  let prefixPrice = "";
  let fullPrice = "";

  if (stringPrice.length < 6) {
    suffixPrice = stringPrice.slice(0, 3);
    prefixPrice = stringPrice.slice(3);
    fullPrice = suffixPrice + "." + prefixPrice;
  } else {
    firstNumber = stringPrice.slice(0, 1);
    suffixPrice = stringPrice.slice(1, 4);
    prefixPrice = stringPrice.slice(4);
    fullPrice = firstNumber + "," + suffixPrice + "." + prefixPrice;
  }

  if (stringPrice.length < 5) {
    suffixPrice = stringPrice.slice(0, 2);
    prefixPrice = stringPrice.slice(2);
    fullPrice = suffixPrice + "." + prefixPrice;
    console.log("fullPrice: ", fullPrice);
  }

  return (
    <div className="filter-div">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      <div className="category">
        <h3>Category</h3>
        <button name="all" className="fltr-pla active" onClick={handleCategory}>
          All
        </button>
        {categoryList.map((category) => (
          <Option value={category} handleCategory={handleCategory} />
        ))}
      </div>
      <div className="comp">
        <h3>Company</h3>
        <div className="products-List_sort">
          <select
            name="sort"
            id="sort-group"
            className="products-List_sort-group"
            onChange={handleCompany}
          >
            <option value="all">All</option>
            {companyList.map((company) => (
              <option value={company}>{company}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="colors">
        <h3>Color</h3>
        <button
          name="all"
          className="mini-color-btn"
          onClick={() => handleColor("all")}
        >
          All
        </button>
        <div className="mini-colors">
          {colorList.map((color) => (
            <button
              className="mini-color"
              style={{ backgroundColor: color }}
              onClick={() => handleColor(color)}
            ></button>
          ))}
        </div>
      </div>
      <div className="price">
        <h3>Price</h3>
        <p>${fullPrice}</p>
        <input
          type="range"
          min={0}
          max={String(price)}
          value={String(price)}
          onChange={handlePrice}
        />
      </div>
      <div className="free">
        <p>Free Shipping</p>
        <input type="checkbox" onChange={handleShipping} />
      </div>
      <button className="clear" onClick={handleClear}>
        Clear Filters
      </button>
    </div>
  );
}
