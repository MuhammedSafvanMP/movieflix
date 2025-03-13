'use client'
import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import axios from "axios";
import LazyLoading from "../lazyLoading/LazyLoading";

export function SimilarMovie({ id,title }: any) {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


  const similarMovies = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;


  React.useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(similarMovies);
        setMovies(response.data.results);
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div>
      <h1 className="text-white pl-14">{title}</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[95%] m-auto"
      >
        <CarouselContent>
          {isLoading ? (
            [...Array(6)].map((_, index) => (
              <CarouselItem key={index} className="w-auto md:basis-1/6 lg:basis-1/6">
                <div className="p-1">
                  <Card>
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                      <LazyLoading />
                    </figure>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : movies.length > 0 ? (
            movies.map((movie: any) => (
              <CarouselItem key={movie.id} className="w-auto md:basis-1/6 lg:basis-1/6">
                <div className="p-1">
                  <Card>
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                      <Link href={`/movies/${movie.id}`}>
                        <img
                          className="rounded-lg"
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                        />
                      </Link>
                    </figure>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className="w-auto md:basis-1/6 lg:basis-1/6">
              <div className="p-1">
                <Card>
                  <p className="text-center text-white">No movies available</p>
                </Card>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
