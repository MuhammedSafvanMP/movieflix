"use client";

import Navbar from "@/components/Home/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { defultSerch, search } from "../../../Data/geners";
import Link from "next/link";

export default function page() {
  const [findMovie, setFindMovie] = useState([]);
  const [find, setFind] = useState("");
  const [dummy, setDummy] = useState([]);
  // const navigate = useNavigate();

  const findData = (e: any) => {
    setFind(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${ search}=${find}`);
      setFindMovie(response.data.results);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleSearchMovie = async () => {
    try {
      const response = await axios.get(defultSerch);
      setDummy(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
    handleSearchMovie();
  }, []);

  return (
    <div className="bg-black ">
      <Navbar />
      <div className="w-full max-w-sm min-w-[100%] relative my-4 flex  justify-end right-5">
        <div className="relative">
          <input
            type="email"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-32 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Search your favorite movie..."
            onChange={findData}
          />
          <button
            onClick={handleSearch}
            className="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[100vh]">
        {findMovie.length > 0
          ? findMovie.map((movie: any) => (
              <div key={movie?.id}>
               <Link href={`movies/${movie.id}`}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                    movie && movie.poster_path
                  }`}
                  alt="move_image"
                />
                </Link>
              </div>
            ))
          : dummy.map((movie: any) => {
              return (
                <div key={movie?.id}>
                   <Link href={`movies/${movie.id}`}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${
                      movie && movie.poster_path
                    }`}
                    alt="move_image"
                  />
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}
