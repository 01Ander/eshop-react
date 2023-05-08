import { useContext } from "react";
import { Layout } from "../Components/Layout";
import { ShoppingCartContext } from "../Context";
import { OrderCard } from "../Components/OrderCard";

const MyOrders = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My orders
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            product={product}
            handleDelete={undefined}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
