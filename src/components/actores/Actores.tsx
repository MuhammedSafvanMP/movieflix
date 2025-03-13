'use client';

import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

interface Actor {
  id: number;
  original_name: string;
  profile_path: string | null;
}

export default function Actores({ id }: { id: number }) {
  const [actors, setActors] = useState<Actor[]>([]);

  const fetchActors = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      setActors(response.data.cast);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (id) fetchActors();
  }, [id]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white">
      {actors?.slice(0, 6).map((actor) => (
        <div key={actor.id} className="flex flex-col items-center">
          {actor.profile_path ? (
            <img
              className="w-24 h-24 md:w-32 md:h-32 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={`${baseURL}${actor.profile_path}`}
              alt={actor.original_name}
            />
          ) : (
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 bg-gray-700">
              <span className="text-xs md:text-sm">No Image</span>
            </div>
          )}
          <h2 className="text-center mt-1 text-sm md:text-base">{actor.original_name}</h2>
        </div>
      ))}
    </div>
  );
}
