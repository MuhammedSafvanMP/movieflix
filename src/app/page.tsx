import LoginPage from '@/components/auth/LoginPage'
import Header from '@/components/Home/Header'
import { MovieSlider } from '@/components/Home/MovieSlider'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { ActionMovies, ComedyMovies, Documentaries, HorrorMovies, originals, Popular, RomanceMovies, trending } from '../../Data/geners'

export default function Home() {
  return (
    
    <div className='p-3 flex flex-col gap-8 '>
     {/* <LoginPage /> */}
    
        <Header url={Popular}  />
        <MovieSlider title= "Popular on Netflix" url={Popular && Popular} />
        <MovieSlider title= "Trending" url={trending && trending}  />
        <MovieSlider title= "Originals" url={originals && originals}  />
        <MovieSlider title= "Action Movies" url={ActionMovies && ActionMovies}  />
        <MovieSlider title= "Comedy Movies" url={ComedyMovies && ComedyMovies}  />
        <MovieSlider title= "Horror Movies" url={HorrorMovies && HorrorMovies}  />
        <MovieSlider title= "Romance Movies" url={RomanceMovies && RomanceMovies} />
        <MovieSlider title= "Documentaries" url={Documentaries && Documentaries} />

    </div>

  )
}
