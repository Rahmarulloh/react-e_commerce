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
  imgUrl: string;
  title: string;
  price: number;
}

export type { IProduct, CartProp };
