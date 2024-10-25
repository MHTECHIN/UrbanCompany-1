import React from "react";
import HomeServices from "../components/HomeServices";
import Slider from "../components/Slider";
import Noteworthy from "../components/Noteworthy";
import BookedService from "../components/BookedServices";
import Smartlock from "../components/Smartlock";
import SaloonWomen from "../components/SaloonWomen";
import SpaforWomen from "../components/SpaforWomen";

export default function HomePage() {
  return (
    <>
      <HomeServices />
      <Slider />
      <Noteworthy />
      <BookedService />
      <Smartlock />
      <SaloonWomen />
      <SpaforWomen />
    </>
  );
}
