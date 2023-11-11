interface IFilter {
  // price: number;
  // colorList: string[];
  // companyList: string[];
  categoryList: string[];
  // handleColor: () => void;
  // handleCompany: () => void;
  handleCategory: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  // handlePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IOption {
  value: string;
  handleCategory: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

interface IProductList {
  productList: IProduct[];
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
}

interface CartProp {
  title: string;
  price: number;
  imgUrl: string;
  isGrid: boolean;
  description?: string;
}

export type { IProduct, CartProp, IProductList, IFilter, IOption };
