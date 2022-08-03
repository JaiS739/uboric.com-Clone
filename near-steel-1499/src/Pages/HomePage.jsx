import React from "react";



import HomeTopSliding from "./HomeTopSliding";
import Kitchen from "../Components/Home/Kitchen";
import Support from "../Components/Home/Support";
import OtherHome from "../Components/Home/OtherHome";

import SpicesAndFootWear from "../Components/Home/SpicesAndFootWear";
import Clothing from "../Components/Home/Clothing";
import PersonalCare from "../Components/Home/PersonalCare";
import Spices from "../Components/Home/Spices";
import Footwear from "../Components/Home/Footwear";
import FootwearHeading from "../Components/Home/FootwearHeading";

const HomePage = () => {
  return (
    <>
      <HomeTopSliding />
      <Kitchen />
      <Support />
      <OtherHome />
      <SpicesAndFootWear />
      <Clothing />
      <PersonalCare />
      <Spices />
      <FootwearHeading />
      <Footwear />
    </>

  );
};

export default HomePage;
