import Sidebar from "components/common/sidebar";
import ProductList from "components/product/productList";
import products from "utils/api";
import { IProduct } from "utils/types";
import { useEffect, useState } from "react";

export default function Products() {
  const [originalProducts, setOriginalProducts] = useState<IProduct[]>([]);
  const [productsArr, setProductsArr] = useState<IProduct[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [companyList, setCompanyList] = useState<string[]>([]);
  const [isCategoryFiltered, setIsCategoryFiltered] = useState<boolean>(false);
  const [isCompanyFiltered, setIsCompanyFiltered] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      const data = await products();
      setOriginalProducts(data);
      setProductsArr(data.sort((a, b) => a.price - b.price));
      setCategoryList(
        Array.from(new Set(data.map((product) => product.category)))
      );
      setCompanyList(
        Array.from(new Set(data.map((product) => product.company)))
      );
    }
    fetchProducts();
  }, []);

  function handleCategory(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setIsCategoryFiltered(true);
    const buttons = document.querySelectorAll(".fltr-pla");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    const button = event.target as HTMLButtonElement;
    const name = button.name;
    button.classList.toggle("active");
    console.log("Products Arr: ", productsArr);

    if (isCompanyFiltered) {
      setProductsArr(
        originalProducts.filter((product) => product.category === name)
      );
    } else if (name === "all") {
      setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    } else {
      setProductsArr(
        [...originalProducts].filter((product) => product.category === name)
      );
    }

    console.log("name: ", name);
  }

  function handleCompany(event: React.ChangeEvent<HTMLSelectElement>) {
    setIsCompanyFiltered(true);
    const name = event.target.value;
    console.log("Products Arr: ", productsArr);

    if (isCategoryFiltered) {
      setProductsArr(productsArr.filter((product) => product.company === name));
    } else if (name === "all") {
      setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    } else {
      setProductsArr(productsArr.filter((product) => product.company === name));
    }
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
      <Sidebar
        categoryList={categoryList}
        companyList={companyList}
        handleCategory={handleCategory}
        handleCompany={handleCompany}
      />
      <ProductList productList={productsArr} handleSort={handleSort} />
    </div>
  );
}
