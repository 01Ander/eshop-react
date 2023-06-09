import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import MyAccount from "./MyAccount";
import { MyOrders } from "./MyOrders";
import MyOrder from "./MyOrder";
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
            <Route path="/All" element={<Home />} />
            <Route path="/clothes" element={<Home />} />
            <Route path="/electronics" element={<Home />} />
            <Route path="/furniture" element={<Home />} />
            <Route path="/others" element={<Home />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/my-order/:id" element={<MyOrder />} />
            <Route path="/my-order/last" element={<MyOrder />} />
            <Route path="/sing-in" element={<SingIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
