import { Home } from "./Home";
import MyAccount from "./MyAccount";
import MyOrders from "./MyOrders";
import NotFound from "./NotFound";
import SingIn from "./SingIn";

function App() {
  return (
    <>
      <h1 className="bg-red-100">Hello World</h1>
      <Home />
      <MyAccount />
      <MyOrders />
      <SingIn />
      <NotFound />
    </>
  );
}

export default App;
