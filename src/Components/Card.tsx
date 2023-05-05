import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { PlusIcon } from "@heroicons/react/24/outline";

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps): JSX.Element => {
  const { title, price, category, images } = product;
  const context = useContext(ShoppingCartContext);
  const handleAddCartProduct = (product: Product): void => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, product]);
  };
  const handleClickCard = (product: Product): void => {
    context.setProductToShow(product);
    context.openProductDetail();
  };
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={() => handleClickCard(product)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 bg-white/60 rounded-lg text-black text-xs px-3 py-0.5">
          {category.name}
        </span>
        <img
          src={images[0]}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full"
          onClick={() => handleAddCartProduct(product)}
        >
          <PlusIcon className="h-4 w-4 text-black" />
        </div>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{price}</span>
      </p>
    </div>
  );
};
