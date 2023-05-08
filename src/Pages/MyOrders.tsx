import { useContext } from "react";
import { Layout } from "../Components/Layout";
import { OrderCards } from "../Components/OrdersCard";
import { ShoppingCartContext } from "../Context";
import { Link } from "react-router-dom";

export const MyOrders = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My orders
      <div className="w-1/2">
      {context.order?.map((order, index) => (
        <div className="mx-6" >
          <Link to={`/my-order/${index}`} className="mb-4">
            <OrderCards key={index} order={order} />
          </Link>
        </div>
      ))}
      </div>
    </Layout>
  );
};
