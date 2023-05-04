import { createContext, ReactNode, useState } from "react";

type ShoppingCartContextType = {
  count: number;
  setCount: (count: number) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  count: 0,
  setCount: () => {
    //function void
  }
});

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const contextValue = { count, setCount };
  console.log(count)
  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
