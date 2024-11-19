import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StoreContext } from "@/context/ShopContext";
import { useContext } from "react";

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
        <Input
          placeholder="Search"
          value={search_query}
          onChange={handleSearchChange}
        />
        <Button type="submit" className="bg-emerald-900">
          Search
        </Button>
      </form>
      {search_query.length > 2 && (
        <div className="bg-red-100 w-full">
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
  );
};

export default Search;
