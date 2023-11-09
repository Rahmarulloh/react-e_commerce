interface IProductList {
  isGrid: boolean;
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

export type { IProduct, CartProp };
