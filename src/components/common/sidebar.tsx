export default function Sidebar() {
  return (
    <div className="filter-div">
      <input className="search-input" type="text" placeholder="Search" />
      <div className="category">
        <h3>Category</h3>
        <p className="fltr-pla">All</p>
        <p className="fltr-pla">Office</p>
        <p className="fltr-pla">Living Room</p>
        <p className="fltr-pla">Kitchen</p>
        <p className="fltr-pla">Bedroom</p>
        <p className="fltr-pla">Dining</p>
        <p className="fltr-pla">Kids</p>
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
      <button>Clear Filters</button>
    </div>
  );
}
