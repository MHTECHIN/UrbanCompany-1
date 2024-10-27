import React from "react";
import HomeServices from "../components/HomeServices";
import Slider from "../components/Slider";
import Poster from "../components/Poster";

import ac_and_appliances from "../constants/home/ac_and_appliances";
import cleaning_pest from "../constants/home/cleaning_pest";
import massage_for_men from "../constants/home/massage_for_men";
import most_booked_services from "../constants/home/most_booked_services";
import note_worthy from "../constants/home/note_worthy";
import quick_home_repairs from "../constants/home/quick_home_repairs";
import saloon_for_kids from "../constants/home/saloon_for_kids";
import saloon_for_women from "../constants/home/saloon_for_women";
import spa_for_women from "../constants/home/spa_for_women";
import CardTitle from "../components/CardTitle";
import CardTitlePrice from "../components/CardTitlePrice";
import TitleImageCard from "../components/TitleImageCard";

export default function HomePage() {
  return (
    <>
      <HomeServices />
      <Slider />
      <CardTitle title={note_worthy.title} products={note_worthy.products} />
      <CardTitlePrice
        title={most_booked_services.title}
        products={most_booked_services.products}
      />
      <Poster src={"/smartlockposter.webp"} />
      <TitleImageCard
        title={saloon_for_women.title}
        products={saloon_for_women.products}
      />
      <TitleImageCard
        title={spa_for_women.title}
        products={spa_for_women.products}
      />
      <Poster src={"/elevate.webp"} />
      <TitleImageCard
        title={cleaning_pest.title}
        products={cleaning_pest.products}
      />
      <Poster src={"/rowat.jpeg"} />
      <TitleImageCard
        title={ac_and_appliances.title}
        products={ac_and_appliances.products}
      />
      <CardTitlePrice
        title={quick_home_repairs.title}
        products={quick_home_repairs.products}
      />
      <TitleImageCard
        title={massage_for_men.title}
        products={massage_for_men.products}
      />
      <Poster src={"/b-m-1.jpeg"} />
      <TitleImageCard
        title={saloon_for_kids.title}
        products={saloon_for_kids.products}
      />
    </>
  );
}
