import React from "react";
import AnimeList from "./List/AnimeList"
export default function MyList() {
  return (
    <div>
      <div className="xl:px-20 lg:px-12 md:px-10 px-4 py-20 my-20">
        <AnimeList />
      </div>
    </div>
  );
}
