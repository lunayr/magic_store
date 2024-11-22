import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { StoreContext } from "@/context/ShopContext";
import { useContext } from "react";


// 
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

  const totalPrice = basketItems.reduce<number>(
    (total, item) =>
      item ? total + item.price * basketCounts[item.id] : total,
    0
  );

  return (
    <div className="col-span-4 p-4 space-y-4">
      <div className="flex items-center justify-between">
        You have {basket.length} items in your basket{" "}
        <Button variant="outline" onClick={clearBasket}>
          Clear Basket
        </Button>
      </div>

      <div className="flex flex-col gap-2 ">
        {basketItems.map((item, i) => {
          if (!item) return;
          return (
            <Card
              className="p-2 gap-3 border rounded-lg flex items-center "
              key={i}
            >
              <img
                className="rounded-lg"
                src={item?.image}
                height={50}
                width={50}
              />

              <CardTitle className="flex-1 flex-row">
                {item?.name} x {basketCounts[item.id]}
              </CardTitle>
              <Button
                variant="ghost"
                className="select-none"
                onClick={() => removeFromBasket(item.id)}
              >
                Remove
              </Button>
            </Card>
          );
        })}
      </div>
      <div className="flex gap-1 bottom-0 flex-row-reverse">
        {totalPrice.toFixed(2)} SEK <span className="font-medium">Total:</span>
      </div>
    </div>
  );
};

export default Basket;
