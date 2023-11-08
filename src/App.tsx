import "assets/styles/main.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layout
import Layout from "components/common/layout";
import Products from "pages/products";
import Cart from "components/cart/cart";
import About from "pages/about";
import Home from "pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />}></Route>
      <Route path="cart" element={<Cart />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
