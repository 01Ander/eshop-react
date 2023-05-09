import { createContext, ReactNode, useEffect, useState } from "react";
import { getData } from "../api/api";

type ShoppingCartContextType = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  count: number;
  setCount: (count: number) => void;
  isOpenProductDetail: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  productToShow: Product;
  setProductToShow: (product: Product) => void;
  cartProducts: Product[];
  setCartProducts: (product: Product[]) => void;
  isOpenCartProducts: boolean;
  openCartProducts: () => void;
  closeCartProducts: () => void;
  order: myOrder[];
  setOrder: (product: myOrder[]) => void;
  searchProduct: string | null;
  setSearchProduct: (product: string) => void;
  filteredProducts: Product[];
  setFilteredProducts: (product: Product[]) => void;
  productsByCategory: Product[];
  setProductsByCategory: (product: Product[]) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  products: [],
  setProducts: () => {
    // do nothing
  },
  count: 0,
  setCount: () => {
    // do nothing
  },
  isOpenProductDetail: false,
  openProductDetail: () => {
    // do nothing
  },
  closeProductDetail: () => {
    // do nothing
  },
  productToShow: {} as Product,
  setProductToShow: () => {
    // do nothing
  },
  cartProducts: [],
  setCartProducts: () => {
    // do nothing
  },
  isOpenCartProducts: false,
  openCartProducts: () => {
    // do nothing
  },
  closeCartProducts: () => {
    // do nothing
  },
  order: [],
  setOrder: () => {
    // do nothing
  },
  searchProduct: null,
  setSearchProduct: () => {
    // do nothing
  },
  filteredProducts: [],
  setFilteredProducts: () => {
    // do nothing
  },
  productsByCategory: [],
  setProductsByCategory: () => {
    // do nothing
  },
});

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);
  useEffect(() => {
    getData()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [count, setCount] = useState<number>(0);

  const [isOpenProductDetail, setIsOpenProductDetail] =
    useState<boolean>(false);
  const openProductDetail = (): void => {
    setIsOpenProductDetail(true);
  };
  const closeProductDetail = (): void => {
    setIsOpenProductDetail(false);
  };
  const [productToShow, setProductToShow] = useState({} as Product);

  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [isOpenCartProducts, setIsOpenCartProducts] = useState<boolean>(false);
  const openCartProducts = (): void => {
    setIsOpenCartProducts(true);
  };
  const closeCartProducts = (): void => {
    setIsOpenCartProducts(false);
  };

  const [order, setOrder] = useState<myOrder[]>([]);

  const [searchProduct, setSearchProduct] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const filteredProductsFunction = (
    products: Product[],
    searchProduct: string
  ) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchProduct.toLowerCase())
    );
  };
  useEffect(() => {
    if (searchProduct) {
      setFilteredProducts(filteredProductsFunction(products, searchProduct));
    }
  }, [products, searchProduct]);

  const contextValue = {
    products,
    setProducts,
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    isOpenProductDetail,
    productToShow,
    setProductToShow,
    cartProducts,
    setCartProducts,
    isOpenCartProducts,
    openCartProducts,
    closeCartProducts,
    order,
    setOrder,
    searchProduct,
    setSearchProduct,
    filteredProducts,
    setFilteredProducts,
    productsByCategory,
    setProductsByCategory,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
