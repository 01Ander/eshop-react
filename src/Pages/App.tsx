import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import MyAccount from "./MyAccount";
import MyOrders from "./MyOrders";
import NotFound from "./NotFound";
import SingIn from "./SingIn";
import { Navbar } from "../Components/Navbar";

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
