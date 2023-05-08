import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import MyAccount from "./MyAccount";
import MyOrders from "./MyOrders";
import NotFound from "./NotFound";
import SingIn from "./SingIn";
import { Navbar } from "../Components/Navbar";
import { ShoppingCartProvider } from "../Context";
import { SideMenu } from "../Components/SideMenu";

const App = (): JSX.Element => {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Navbar />
          <SideMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/my-orders/last" element={<MyOrders />} />
            <Route path="/sing-in" element={<SingIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
