import Sidebar from "components/common/sidebar";
import ProductList from "components/product/productList";

export default function Products() {
  return (
    <div className="products">
      <Sidebar />
      <ProductList />
    </div>
  );
}
