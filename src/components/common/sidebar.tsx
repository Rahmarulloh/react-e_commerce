import { IFilter } from "utils/types";
import Option from "./option";

export default function Sidebar(props: IFilter) {
  return (
    <div className="filter-div">
      <input className="search-input" type="text" placeholder="Search" />
      <div className="category">
        <h3>Category</h3>
        <button name="all" className="fltr-pla" onClick={props.handleCategory}>
          All
        </button>
        {props.categoryList.map((category) => (
          <Option value={category} handleCategory={props.handleCategory} />
        ))}
      </div>
      <div className="comp">
        <h3>Company</h3>
        <input className="all-input" type="text" placeholder="All" />
      </div>
      <div className="colors">
        <h3>Color</h3>
        <p>All</p>
        <div className="mini-color1"></div>
        <div className="mini-color2"></div>
        <div className="mini-color3"></div>
        <div className="mini-color4"></div>
        <div className="mini-color5"></div>
      </div>
      <div className="price">
        <h3>Price</h3>
        <p>$3.009.000</p>
        <input type="range" />
      </div>
      <div className="free">
        <p>Free Shleping</p>
        <input type="checkbox" />
      </div>
      <button className="clear">Clear Filters</button>
    </div>
  );
}
