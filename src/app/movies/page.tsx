import { MovieSlider } from "@/components/Home/MovieSlider";
import Navbar from "@/components/Home/Navbar";
import React from "react";
import { now_playing, Popular, trending, upcoming } from "../../../Data/geners";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <MovieSlider url={now_playing} title={"Now Playing"} />
        <MovieSlider url={Popular} title={"Popular"} />
        <MovieSlider url={trending} title={"Trending"} />
        <MovieSlider url={upcoming} title={"Upcoming"} />
      </div>
    </>
  );
}
