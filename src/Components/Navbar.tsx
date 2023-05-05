import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export const Navbar = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-4 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
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
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
          <div className="">{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};
