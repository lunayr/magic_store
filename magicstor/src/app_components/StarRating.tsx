import React, { useContext, useState } from "react";
import { Star } from "lucide-react";
import { IProductItem, StoreContext } from "@/context/ShopContext";
import { cn } from "@/lib/utils";

// this component is handling rating star system and using context to handle when giving rate
const StarRating: React.FC<{ product: IProductItem }> = ({ product }) => {
  const { addRating } = useContext(StoreContext);

  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleHover = (num: number) => {
    if (product.ratings.voted) return;
    setHoverRating(num);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const currentRating = hoverRating || product.ratings.average;
          const percentage = Math.min(
            100,
            Math.max(0, currentRating - index) * 100
          );

          return (
            <div
              key={index}
              className="relative inline-block cursor-pointer"
              onClick={() => addRating(product.id, index)}
              onMouseEnter={() => handleHover(index + 1)}
              onMouseLeave={() => setHoverRating(0)}
            >
              <Star className="size-5 text-gray-300" strokeWidth={1.5} />
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${percentage}%` }}
              >
                <Star
                  className={cn("size-5 text-yellow-400", {
                    "text-emerald-500": product.ratings.voted,
                  })}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-sm text-gray-600">
        {product.ratings.average.toFixed(1)} ({product.ratings.count} votes)
      </div>
    </div>
  );
};

export default StarRating;
