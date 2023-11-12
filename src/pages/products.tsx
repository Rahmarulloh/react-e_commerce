import Sidebar from "components/common/sidebar";
import ProductList from "components/product/productList";
import products from "utils/api";
import { IProduct } from "utils/types";
import { useEffect, useState } from "react";

export default function Products() {
  const [originalProducts, setOriginalProducts] = useState<IProduct[]>([]);
  const [productsArr, setProductsArr] = useState<IProduct[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await products();
      setOriginalProducts(data);
      setProductsArr(data.sort((a, b) => a.price - b.price));
      setCategoryList(
        Array.from(new Set(data.map((product) => product.category)))
      );
    }
    fetchProducts();
  }, []);

  function handleCategory(
    name :string,
  ) {
    console.log("Products Arr: ", productsArr);
    console.log(name);
    

    if (name === "all") {
      setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    } else {
      setProductsArr(
        [...originalProducts].filter((product) => product.category === name)
      );
    }

    console.log("name: ", name);
  }

  function handleSort(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value;

    if (selectedValue === "highest") {
      const highest = [...productsArr].sort((a, b) => b.price - a.price);
      setProductsArr(highest);
    } else if (selectedValue === "lowest") {
      const lowest = [...productsArr].sort((a, b) => a.price - b.price);
      setProductsArr(lowest);
    } else if (selectedValue === "a-z") {
      const a_z = [...productsArr].sort((a, b) => a.name.localeCompare(b.name));
      setProductsArr(a_z);
    } else if (selectedValue === "z-a") {
      const z_a = [...productsArr].sort((a, b) => b.name.localeCompare(a.name));
      setProductsArr(z_a);
    }
  }

  return (
    <div className="products">
      <Sidebar categoryList={categoryList} handleCategory={handleCategory} />
      <ProductList productList={productsArr} handleSort={handleSort} />
    </div>
  );
}
