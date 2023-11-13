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
  const [colorList, setColorList] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);

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
      setColorList(
        Array.from(new Set(data.flatMap((product) => product.colors)))
      );
      setPrice(Math.max(...data.map((product) => product.price)));
    }
    fetchProducts();
  }, []);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const filteredProducts = originalProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProductsArr(filteredProducts);
  }

  function handleCategory(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const buttons = document.querySelectorAll(".fltr-pla");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    const button = event.target as HTMLButtonElement;
    const name = button.name;
    button.classList.toggle("active");
    console.log("Products Arr: ", productsArr);

    if (name === "all") {
      setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    } else {
      setProductsArr(
        [...originalProducts].filter((product) => product.category === name)
      );
    }
  }

  function handleColor(color: string) {
    if (color === "all") {
      setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    } else {
      setProductsArr(
        [...originalProducts].filter((product) =>
          product.colors.includes(color)
        )
      );
    }
  }

  function handlePrice(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setPrice(value);

    if (
      value === Math.max(...originalProducts.map((product) => product.price))
    ) {
      setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    } else {
      setProductsArr(
        [...originalProducts].filter((product) => product.price <= value)
      );
    }
  }

  function handleShipping(event: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    console.log("shipping: ", isChecked);

    if (isChecked) {
      setProductsArr(
        [...originalProducts].filter((product) => product.shipping === true)
      );
    } else {
      setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    }
  }

  function handleCompany(event: React.ChangeEvent<HTMLSelectElement>) {
    const name = event.target.value;
    console.log("Products Arr: ", productsArr);

    if (name === "all") {
      setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    } else {
      setProductsArr(
        [...originalProducts].filter((product) => product.company === name)
      );
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

  function handleClear() {
    const buttons = document.querySelectorAll(".fltr-pla");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    const categoryButtons = document.querySelectorAll(".category .fltr-pla");
    if (categoryButtons.length > 0) {
      categoryButtons[0].classList.add("active");
    }

    setProductsArr(originalProducts.sort((a, b) => a.price - b.price));
    setPrice(Math.max(...originalProducts.map((product) => product.price)));

    const companySelect = document.getElementById(
      "sort-group"
    ) as HTMLSelectElement;
    if (companySelect) {
      companySelect.value = "all";
    }
  }

  return (
    <div className="products">
      <Sidebar
        price={price}
        colorList={colorList}
        handleColor={handleColor}
        companyList={companyList}
        handlePrice={handlePrice}
        handleClear={handleClear}
        categoryList={categoryList}
        handleSearch={handleSearch}
        handleCompany={handleCompany}
        handleCategory={handleCategory}
        handleShipping={handleShipping}
      />
      <ProductList productList={productsArr} handleSort={handleSort} />
    </div>
  );
}
