import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { getProductsByCategory } from "../api/api";

export const Navbar = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);
  const { setProductsByCategory } = context;

  const activeStyle = "underline underline-offset-4";

  const handleOpenCartProducts = (): void => {
    context.openCartProducts();
    context.closeProductDetail();
  };

  const showProductsByCategory = async (
    id: number
  ): Promise<Product[]> => {
    try {
      const data = await getProductsByCategory(id);
      setProductsByCategory(data);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-4 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            onClick={() => setProductsByCategory([])}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => {
              showProductsByCategory(1);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => {
              showProductsByCategory(2);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            onClick={() => {
              showProductsByCategory(3);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => {
              showProductsByCategory(5);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li className="text-black/60">correo@correo.com</li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sing in
          </NavLink>
        </li>
        <li
          className="flex items-center"
          onClick={() => handleOpenCartProducts()}
        >
          <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
          <div className="">{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};
