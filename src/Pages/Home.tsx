import { useContext } from "react";
import { Card } from "../Components/Card";
import { Layout } from "../Components/Layout";
import { ProductDetail } from "../Components/ProductDetail";
import { ShoppingCartContext } from "../Context";

export const Home = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);
  const { products, filteredProducts, setSearchProduct, productsByCategory } = context;

  const renderView = () => {
    if (context.productsByCategory.length > 0) {
      return productsByCategory?.map((product) => (
        <Card key={product.id} product={product} />
      ));
    }
    if (context.searchProduct) {
      if (filteredProducts?.length > 0) {
        return filteredProducts?.map((product) => (
          <Card key={product.id} product={product} />
        ));
      } else {
        return (
          <div className="flex items-center justify-center relative w-80 mb-4">
            <h1 className="font-medium text-xl">No products found</h1>
          </div>
        );
      }
    } else {
      return products?.map((product) => (
        <Card key={product.id} product={product} />
      ));
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        className="w-1/2 h-10 px-3 mb-8 text-base text-gray-700 placeholder-gray-600 border border-black rounded-lg focus:shadow-outline"
        placeholder="Search"
        onChange={(e) => setSearchProduct(e.target.value)}
      />
      <div className="grid gap-4 grid-cols-3 w-full max-w-screen-md">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};
