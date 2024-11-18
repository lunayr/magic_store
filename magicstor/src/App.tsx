import Basket from "./app_components/Basket";
import ProductCard from "./app_components/ProductCard";
import Search from "./app_components/Search";

function App() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <Search />
      <div className="flex">
        <ProductCard />
        <Basket />
      </div>
    </div>
  );
}

export default App;
