import React from "react";
import HomeServices from "../components/HomeServices";
import Slider from "../components/Slider";
import Noteworthy from "../components/Noteworthy";
import BookedService from "../components/BookedServices";
import Smartlock from "../components/Smartlock";
import SaloonWomen from "../components/SaloonWomen";
import SpaforWomen from "../components/SpaforWomen";
import ElevatePoster from "../components/ElevatePoster";
import CleaningPest from "../components/CleaningPest";
import ROWate from "../components/ROWate";
import AcAppliances from "../components/AcAppliances";
import QuickHome from "../components/QuickHome";
import MasageForMen from "../components/MassageForMen";
import BathroomClean from "../components/BathroomClean";
import SaloonKids from "../components/SaloonKids";

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
      <ElevatePoster />
      <CleaningPest />
      <ROWate />
      <AcAppliances />
      <QuickHome />
      <MasageForMen />
      <BathroomClean />
      <SaloonKids />
    </>
  );
}
