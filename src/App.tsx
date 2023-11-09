import ProductList from "components/product/productList";
import "assets/styles/main.scss";
import Sidebar from "components/common/sidebar";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ProductList />
      <Sidebar />
    </div>
  );
}

export default App;
