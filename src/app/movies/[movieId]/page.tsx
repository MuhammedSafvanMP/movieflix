"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import "react-circular-progressbar/dist/styles.css"
import { IoHeartCircle, IoListCircle } from "react-icons/io5"
import { FaBookmark, FaPlay } from "react-icons/fa"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import YouTube from "react-youtube"
import { SimilarMovie } from "@/components/movie/SimilarMovie"
import Actores from "@/components/actores/Actores"
import Navbar from "@/components/Home/Navbar"
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function Page() {
  const params = useParams()
  const id: any = params?.movieId

  const [reviewMovie, setReviewMovie] = useState<any>({})
  const [video, setVideo] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  if (!id) {
    notFound()
  }

  useEffect(() => {
    if (!id) return

    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
        )
        setReviewMovie(response.data)
      } catch (error: any) {
        console.error("Error fetching movie data:", error.message)
      } finally {
        setLoading(false)
      }
    }

    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
        )
        setVideo(response.data.results)
      } catch (error: any) {
        console.error("Error fetching videos:", error.message)
      }
    }

    fetchMovie()
    fetchVideo()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading movie details...</p>
        </div>
      </div>
    )
  }

  if (!id || Object.keys(reviewMovie).length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Movie not found</p>
      </div>
    )
  }

  const rating = Math.ceil(reviewMovie.vote_average * 10) 
  const posterPath = `${process.env.NEXT_PUBLIC_BASE_URL}${reviewMovie.poster_path}`

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <section
          className="w-full py-8 md:py-12 text-white flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${posterPath})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="w-full px-4 md:w-1/3 lg:w-1/4 flex justify-center">
            <img
              src={posterPath || "/placeholder.svg"}
              alt={reviewMovie.title || "Movie Poster"}
              className="rounded-lg w-full max-w-[250px] md:max-w-[300px] shadow-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center w-full px-6 md:w-2/3 lg:w-3/4 gap-4 text-center md:text-left">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              {reviewMovie.title}{" "}
              <span className="text-sm text-gray-300">({reviewMovie.release_date?.split("-")[0]})</span>
            </h2>
            <div className="flex flex-wrap gap-2 text-xs justify-center md:justify-start">
              {reviewMovie.genres?.map((genre: any) => (
                <span key={genre.id} className="px-2 py-1 bg-gray-800 rounded-full">
                  {genre.name}
                </span>
              ))}
            </div>
            <h5 className="text-xs md:text-sm">
              Language - <span className="font-normal">{reviewMovie.original_language?.toUpperCase()}</span>
              {reviewMovie.runtime && <span className="ml-2">• {reviewMovie.runtime} min</span>}
            </h5>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={rating}
                  maxValue={100}
                  text={`${rating}%`}
                  styles={buildStyles({
                    textSize: "28px",
                    pathColor: rating < 50 ? "red" : rating < 70 ? "orange" : "green",
                    textColor: "white",
                    trailColor: "rgba(255,255,255,0.2)",
                  })}
                />
              </div>
              <div className="flex gap-4 items-center text-lg">
                <button className="hover:text-primary transition-colors">
                  <IoListCircle className="w-6 h-6" />
                </button>
                <button className="hover:text-primary transition-colors">
                  <IoHeartCircle className="w-6 h-6" />
                </button>
                <button className="hover:text-primary transition-colors">
                  <FaBookmark className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-2 bg-primary/80 hover:bg-primary px-3 py-1.5 rounded-md transition-colors">
                  <FaPlay className="w-3 h-3" />
                  <span className="text-sm">Play Trailer</span>
                </button>
              </div>
            </div>
            <Actores id={id} />
            <h4 className="font-semibold text-xl md:text-2xl mt-2">Overview</h4>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl">{reviewMovie.overview}</p>
          </div>
        </section>

        {video.length > 0 && (
          <div className="w-full py-8 px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Videos & Trailers</h3>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {video.slice(0, 3).map((vid) => (
                  <CarouselItem key={vid.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden">
                        <div className="aspect-video w-full">
                          <YouTube
                            videoId={vid.key}
                            opts={{
                              width: "100%",
                              height: "100%",
                              playerVars: {
                                autoplay: 0,
                                controls: 1,
                                modestbranding: 1,
                                rel: 0,
                              },
                            }}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="p-2 text-xs truncate">{vid.name}</div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
           
            </Carousel>
          </div>
        )}

        <div className="w-full py-6">
          <SimilarMovie id={id} title="Similar Movies" />
        </div>
      </div>
    </>
  )
}

