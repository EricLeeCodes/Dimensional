import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";
import PotatePage from "../pages/PotatePage/PotatePage.tsx";
import HeadphonesPage from "../pages/HeadphonesPage/HeadphonesPage.tsx";
import PhonePage from "../pages/PhonePage/PhonePage.tsx";
import Navbar from "./components/navbar/navbar.tsx";
import { ShopContextProvider } from "./context/shop-context.tsx";
import Cart from "../pages/cart/cart.tsx";
import ThankYou from "../pages/cart/thank-you.tsx";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/headphones" element={<HeadphonesPage />} />
            <Route path="/phone" element={<PhonePage />} />
            <Route path="/potate" element={<PotatePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
