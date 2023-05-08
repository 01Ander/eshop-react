import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { OrderCard } from "./OrderCard";
import { totalPrices } from "../utils";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id: number) => {
    const newCartProducts = context.cartProducts.filter((p) => p.id !== id);
    context.setCartProducts(newCartProducts);
    context.setCount(context.count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: context.cartProducts,
      total: totalPrices(context.cartProducts),
      totalProducts: context.cartProducts.length,
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.closeCartProducts();
  };

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
      <div className="overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <p className="flex justify-between items-center mb-8">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrices(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last" className="w-full">
          <button
            className="bg-black rounded-lg w-full p-4 text-white"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};
