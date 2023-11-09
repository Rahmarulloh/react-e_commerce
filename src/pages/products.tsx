import Sidebar from "components/common/sidebar";
import ProductList from "components/product/productList";
import products from "utils/api";
import { IProduct } from "utils/types";
import { useEffect, useState } from "react";

export default function Products() {
  const [productsArr, setProductsArr] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await products();
      setProductsArr(data.sort((a, b) => a.price - b.price));
    }
    fetchProducts();
  }, []);

  return (
    <div className="products">
      <Sidebar />
      <ProductList />
    </div>
  );
}
