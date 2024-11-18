import { createContext } from "react";

interface IProductItem {
  id: number;
  name: string;
  description: string;
  price: number;
  ratings: { count: number; average: number };
}

interface IStoreContext {
  items: IProductItem[];
  search_query: string;
  setSearchQuery: (search_query: string) => void;
  basket: string[];
  addToBasket: (id: number) => void;
  removeFromBasket: (id: number) => void;
  clearBasket: () => void;
  addRating: (id: string, rating: number) => void;
}

const StoreContext = createContext<IStoreContext>({} as IStoreContext);
