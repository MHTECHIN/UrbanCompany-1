import React from "react";
import HomeServices from "../components/HomeServices";
import Slider from "./Slider";
import Noteworthy from "./Noteworthy";

export default function HomePage() {
  return (
    <>
      <HomeServices />
      <Slider />
      <Noteworthy />
    </>
  );
}
