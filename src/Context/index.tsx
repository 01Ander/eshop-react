import { createContext, ReactNode, useState } from "react";

type ShoppingCartContextType = {
  count: number;
  setCount: (count: number) => void;
  isOpenProductDetail: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  productToShow: Product;
  setProductToShow: (product: Product) => void;
  cartProducts: Product[];
  setCartProducts: (product: Product[]) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
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
  }
});

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps): JSX.Element => {
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

  const contextValue = {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    isOpenProductDetail,
    productToShow,
    setProductToShow,
    cartProducts,
    setCartProducts
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
