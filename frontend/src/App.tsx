import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.tsx";
import PotatePage from "../pages/PotatePage/PotatePage.tsx";
import HeadphonesPage from "../pages/HeadphonesPage/HeadphonesPage.tsx";
import PhonePage from "../pages/PhonePage/PhonePage.tsx";
import Navbar from "./components/navbar.tsx";
import { ShopContextProvider } from "./context/shop-context.tsx";

function App() {
  return (
    <>
      <Router>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/headphones" element={<HeadphonesPage />} />
            <Route path="/phone" element={<PhonePage />} />
            <Route path="/potate" element={<PotatePage />} />
          </Routes>
        </ShopContextProvider>
      </Router>
    </>
  );
}

export default App;
