import React from "react";
import Lookism from "../components/Home/Lookism";
import LatestAnime from "../components/Home/LatestAnime";
import PopularAnime from "../components/Home/PopularAnime";
import ComedyAnime from "../components/Home/ComdeyAnime";
import RomanceAnime from "../components/Home/RomanceAnime";
import ActionAnime from "../components/Home/ActionAnime";
import MoviesAnime from "../components/Home/MoviesAnime";
import BannerCard from "../components/Home/BannerCard";
import RowCard from "../components/Home/RowCard";

export default function HomePage() {
  return (
    <div>
      <Lookism />
      <LatestAnime />
      <PopularAnime />
      <ComedyAnime />
      <BannerCard />
      <RomanceAnime />
      <ActionAnime />
      <RowCard />
      <MoviesAnime />
    </div>
  );
}
