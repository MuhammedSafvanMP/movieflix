"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import info_icon from "../../../public/info_icon.png";
import play_icon from "../../../public/play_icon.png";
import banner_image from "../../../public/hero_banner.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import axios from "axios";

export default function Header({ url }: any) {
  const [headerMovies, setHeaderMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setHeaderMovies(response.data.results);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    if (headerMovies.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentMovieIndex(
        (prevIndex: any) => (prevIndex + 1) % headerMovies.length
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, [headerMovies]);

  const currentMovie: any = headerMovies[currentMovieIndex];

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/70 to-transparent">
        <Navbar />
      </div>

      {/* Banner Image */}
      <div className="w-full h-full">
        {isLoading ? (
          <Image
            className="w-full h-full object-cover"
            src={banner_image}
            alt="Loading Banner"
          />
        ) : (
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`}
            alt="Header_Image"
          />
        )}
      </div>

      {/* Movie Info */}
      <div className="absolute top-1/2 left-4 md:left-12 transform -translate-y-1/2 w-[90%] md:w-[50%] text-white font-sans z-10">
        <span className="text-sm md:text-lg font-light">
          {currentMovie?.release_date}
        </span>
        <h2 className="text-2xl md:text-4xl font-bold mt-2">
          {currentMovie?.title}
        </h2>
        <p className="text-sm md:text-lg mt-2 md:mt-4 leading-snug md:leading-relaxed line-clamp-3 md:line-clamp-none">
          {currentMovie?.overview?.slice(0, 180)}...
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <Button className="bg-white text-black font-medium px-6 py-2 text-sm md:text-lg rounded-md flex items-center gap-2 hover:bg-gray-300 transition">
            <Image src={play_icon} alt="Play" className="w-5 md:w-6" />
            Play
          </Button>
          <Button className="bg-gray-700/80 text-white font-medium px-6 py-2 text-sm md:text-lg rounded-md flex items-center gap-2 hover:bg-gray-600 transition">
            <Image src={info_icon} alt="Info" className="w-5 md:w-6" />
            More Info
          </Button>
        </div>
      </div>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
}
