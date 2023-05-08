import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { OrderCard } from "./OrderCard";

export const SideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isOpenCartProducts ? `flex` : `hidden`
      } cart-side-menu flex-col  fixed right-0 border border-black rounded-lg bg-white p-4`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-xl">My order</h2>
        <XCircleIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => context.closeCartProducts()}
        />
      </div>
      <div className="overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
    </aside>
  );
};
