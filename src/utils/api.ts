import axios from "axios";
import { IProduct } from "./types";

const products = async (): Promise<IProduct[]> => {
  const { data } = await axios.get(
    "https://www.course-api.com/react-store-products"
  );

  console.log("products: ", data);

  return data;
};

export default products;
