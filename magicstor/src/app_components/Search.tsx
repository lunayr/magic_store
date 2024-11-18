import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div className="flex gap-4">
      <Input placeholder="Search" />
      <Button className="bg-emerald-900">Search</Button>
    </div>
  );
};

export default Search;
