import { useContext } from "react"
import { Layout } from "../Components/Layout"
import { ShoppingCartContext } from "../Context";

const MyOrders = ():JSX.Element => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      my orders
      {context.order.map((order) => (
        <div key={order.date.toString()}>
          <p>Date: {order.date.toString()}</p>
          <p>Total price: {order.total}</p>
          <p>Total products: {order.totalProducts}</p>
          {order.products.map((product: Product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export default MyOrders

