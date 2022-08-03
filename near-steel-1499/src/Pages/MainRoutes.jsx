import React from "react";
import { Routes, Route } from "react-router-dom";
import AirTightContainer from "../Components/Categories/AirTightContainer";
import CasualPartyShoes from "../Components/Categories/CasualPartyShoes";
import CasualSandals from "../Components/Categories/CasualSandals";
import CasualSlippers from "../Components/Categories/CasualSlippers";
import ChappalSlippers from "../Components/Categories/ChappalSlippers";
import FlipFlop from "../Components/Categories/FlipFlop";
import Footwear from "../Components/Categories/Footwear";
import GasLighter from "../Components/Categories/GasLighter";
import KitchenTool from "../Components/Categories/KitchenTool";
import KitchenWares from "../Components/Categories/KitchenWares";
import MensFootwear from "../Components/Categories/MensFootwear";

import Cart from "./Cart";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BestSeller from "./BestSeller";
import HomePage from "./HomePage";
import Login from "./Login";
import MyAccount from "./MyAccount";
import SingleProduct from "./SingleProduct";
import NotFound from "./NotFound";
import RequireAuth from "../hoc/RequireAuth";
import CheckOut from "./CheckOut";

// import { Checkout } from "./CheckOut";


const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/myaccount"
          element={
            <RequireAuth>
              <MyAccount />
            </RequireAuth>
          }
        />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route
          path="/product-category/casualslippers"
          element={<CasualSlippers />}
        />
        <Route
          path="/product-category/casual-sandals"
          element={<CasualSandals />}
        />
        <Route
          path="/product-category/chappal-slippers"
          element={<ChappalSlippers />}
        />
        <Route
          path="/product-category/casual-partyshoes"
          element={<CasualPartyShoes />}
        />
        <Route path="/product-category/FlipFlops" element={<FlipFlop />} />
        <Route
          path="/product-category/airTight"
          element={<AirTightContainer />}
        />
        <Route
          path="/product-category/Kitchenware"
          element={<KitchenWares />}
        />
        <Route
          path="/product-category/Kitchenware-GasLighter"
          element={<GasLighter />}
        />
        <Route
          path="/product-category/Kitchenware-Tools"
          element={<KitchenTool />}
        />
        <Route
          path="/product-category/Mensfootwear"
          element={<MensFootwear />}
        />
        <Route path="/product-category/footwear" element={<Footwear />} />
        <Route path="/product-category/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
