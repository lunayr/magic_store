import { Button } from "@/components/ui/button";
import { StoreContext } from "@/context/ShopContext";
import { useContext } from "react";

const Basket = () => {
  const { basket, removeFromBasket, clearBasket, items } =
    useContext(StoreContext);

  const basketCounts = basket.reduce((total, current) => {
    return {
      ...total,
      [current]: total[current] ? total[current] + 1 : 1,
    };
  }, {} as { [key: number]: number });

  const basketItems = Object.keys(basketCounts).map((id) =>
    items.find((item) => item.id === Number(id))
  );

  return (
    <div className="col-span-4 p-4 space-y-4">
      <div>You have {basket.length} items in your basket</div>
      <Button variant="secondary" onClick={clearBasket}>
        Clear Basket
      </Button>
      <div className="flex flex-col gap-2 ">
        {basketItems.map((item, i) => {
          if (!item) return;
          return (
            <div className="p-2 border rounded-lg flex" key={i}>
              <span className="flex-1">
                {item?.name} x {basketCounts[item.id]}
              </span>
              <span
                className="select-none"
                onClick={() => removeFromBasket(item.id)}
              >
                Remove
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
