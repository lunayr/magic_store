import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StoreContext } from "@/context/ShopContext";
import { useContext } from "react";


// this component handles the search button and give recommandations when the length of search_query > 2 
const Search = () => {
  const { search_query, setSearchQuery, items, setFilter } =
    useContext(StoreContext);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter(search_query);
  };

  return (
    <div className="flex gap-4 flex-col">
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <Input
            placeholder="Search"
            value={search_query}
            onChange={handleSearchChange}
          />
          {search_query.length > 2 &&
            items.some(
              (item) =>
                item.id &&
                item.name.toUpperCase().includes(search_query.toUpperCase())
            ) && (
              <div className="py-2 pl-3 mt-[1px] bg-white border-[1px] border-t-0 rounded">
                {items
                  .filter((i) =>
                    i.name.toUpperCase().includes(search_query.toUpperCase())
                  )
                  .map((item) => {
                    return <div key={item.id}>{item.name}</div>;
                  })}
              </div>
            )}
        </div>

        <Button type="submit" className="bg-emerald-900">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
