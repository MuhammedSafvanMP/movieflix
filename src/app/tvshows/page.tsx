import { MovieSlider } from "@/components/Home/MovieSlider";
import React from "react";
import {
  airingToday,
  tvseriesPopular,
  tvshowOnthair,
  tvshowTopRated,
} from "../../../Data/geners";
import Navbar from "@/components/Home/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <MovieSlider title={"Airing Today"} url={airingToday} />
        <MovieSlider title={"On The Air"} url={tvshowOnthair} />
        <MovieSlider title={"Popular"} url={tvseriesPopular} />
        <MovieSlider title={"Top Rated"} url={tvshowTopRated} />
      </div>
    </>
  );
}
