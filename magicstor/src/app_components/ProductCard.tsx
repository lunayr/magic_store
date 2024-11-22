import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProductItem, StoreContext } from "@/context/ShopContext";
import { useContext, useRef, useState } from "react";
import StarRating from "./StarRating";
import { X } from "lucide-react";


// This component lists all of the products and creates Card component for each product. To show the modal when clicked on more button, the HTML element of Dialog is used
const ProductCard = () => {
  const { items, addToBasket, filter } = useContext(StoreContext);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<IProductItem | null>(
    null
  );

  return (
    <div className="flex-1 col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {items
        .filter((item) =>
          item.name.toUpperCase().includes(filter.toUpperCase())
        )
        .map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img
                className="aspect-video object-cover rounded-lg mb-4"
                src={product.image}
                alt="image"
              />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.category}</CardDescription>
              <StarRating key={product.id} product={product} />
            </CardHeader>
            <CardFooter className="flex justify-between sm:flex-row flex-col">
              <span className="font-semibold">{product.price} SEK</span>
              <div className="flex gap-2 md:flex-row flex-col">
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSelectedProduct(product);
                    dialogRef.current?.showModal();
                  }}
                >
                  More..
                </Button>
                <Button
                  className="bg-emerald-700"
                  onClick={() => addToBasket(product.id)}
                >
                  Add to Card
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}

      <dialog ref={dialogRef} className="p-4 rounded-lg max-w-xl">
        {selectedProduct && (
          <>
            <div className="flex flex-row-reverse pr-6">
              <Button
                variant="outline"
                onClick={() => dialogRef.current?.close()}
              >
                <X />
              </Button>
            </div>

            <CardHeader>
              <img
                className="aspect-video object-cover rounded-lg mb-4"
                src={selectedProduct.image}
                alt="image"
              />
              <CardTitle>{selectedProduct.name}</CardTitle>
              <CardDescription>{selectedProduct.category}</CardDescription>
              <StarRating product={selectedProduct} />
            </CardHeader>
            <CardContent>{selectedProduct.description}</CardContent>
            <CardFooter className="flex justify-between sm:flex-row flex-col">
              <span className="font-semibold">{selectedProduct.price} SEK</span>
              <Button
                className="bg-emerald-700"
                onClick={() => addToBasket(selectedProduct.id)}
              >
                Add to Card
              </Button>
            </CardFooter>
          </>
        )}
      </dialog>
    </div>
  );
};

export default ProductCard;
