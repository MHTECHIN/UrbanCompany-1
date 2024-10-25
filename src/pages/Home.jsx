import React from "react";
import HomeServices from "../components/HomeServices";
import Slider from "../components/Slider";
import Noteworthy from "../components/Noteworthy";

export default function HomePage() {
  return (
    <>
      <HomeServices />
      <Slider />
      <Noteworthy />
    </>
  );
}
