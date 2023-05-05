import { XCircleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

export const ProductDetail = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isOpenProductDetail ? `flex` : `hidden`
      } product-detail flex-col  fixed right-0 border border-black rounded-lg bg-white p-4`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XCircleIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => context.closeProductDetail()}
        />
      </div>
      <div className="flex flex-col gap-4">
        <figure className="relative mb-2 w-full h-4/5">
          <img
            src={context.productToShow?.images}
            alt=""
            className="w-full h-full object-cover rounded-lg "
          />
        </figure>
        <h3 className="font-medium text-lg">{context.productToShow?.title}</h3>
        <p className="text-sm font-light">{context.productToShow?.description}</p>
        <p className="text-lg font-medium">${context.productToShow?.price}</p>
        <p className="text-sm font-light">{context.productToShow.category?.name}</p>
      </div>
    </aside>
  );
};
