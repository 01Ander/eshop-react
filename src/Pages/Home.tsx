import { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { Layout } from "../Components/Layout";
import { getData } from "../api/api";

export const Home = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getData()
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-3 w-full max-w-screen-md">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};
