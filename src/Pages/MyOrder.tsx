import { useContext } from "react";
import { Layout } from "../Components/Layout";
import { ShoppingCartContext } from "../Context";
import { OrderCard } from "../Components/OrderCard";

const MyOrder = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const index = parseInt(currentPath.substring(currentPath.lastIndexOf("/") + 1));
  return (
    <Layout>
      My order
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product: Product) => (
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

export default MyOrder;
