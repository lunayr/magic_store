import Basket from "@/app_components/Basket";
import ProductCard from "@/app_components/ProductCard";
import Search from "@/app_components/Search";
import { products } from "@/lib/products";
import { createContext, useState } from "react";

export interface IProductItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  ratings: { count: number; average: number };
}

interface IStoreContext {
  items: IProductItem[];
  search_query: string;
  setSearchQuery: (search_query: string) => void;
  basket: number[];
  addToBasket: (id: number) => void;
  removeFromBasket: (id: number) => void;
  clearBasket: () => void;
  addRating: (id: string, rating: number) => void;
  filter: string;
  setFilter: (query: string) => void;
}

export const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const MagicStore = () => {
  const [search_query, setSearchQuery] = useState("");
  const [basket, setBasket] = useState<number[]>([]);
  const [items, setItems] = useState<IProductItem[]>(products);
  const [filter, setFilter] = useState<string>("");

  const handleAddToBasket = (id: number) => {
    // To know the state of current item we look at the previous
    setBasket((prev) => [...prev, id]);
  };

  const handleRemoveFromBasket = (id: number) => {
    setBasket((prev) => {
      const prevState = [...prev];
      const removeIndex = prevState.findIndex((item) => item === id);
      if (removeIndex >= 0) {
        prevState.splice(removeIndex, 1);
      }
      return [...prevState];
    });
  };

  const handleAddRating = (id: string, rating: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id.toString() === id) {
          const newCount = item.ratings.count + 1;
          const currentTotal = item.ratings.average * item.ratings.count;
          const newAverage = (currentTotal + rating) / newCount;
          return {
            ...item,
            ratings: {
              count: newCount,
              average: newAverage,
            },
          };
        }
        return item;
      })
    );
  };

  return (
    <StoreContext.Provider
      value={{
        items,
        search_query,
        setSearchQuery,
        basket,
        addToBasket: handleAddToBasket,
        removeFromBasket: handleRemoveFromBasket,
        clearBasket: () => setBasket([]),
        addRating: handleAddRating,
        filter,
        setFilter,
      }}
    >
      <div className="p-8 flex flex-col gap-8">
        <Search />
        <div className="grid grid-cols-12">
          <ProductCard />
          <Basket />
        </div>
      </div>
    </StoreContext.Provider>
  );
};
