import { MovieSlider } from '@/components/Home/MovieSlider'
import React from 'react'
import { Popular, trending, tvshowOnthair, tvshowTopRated } from '../../../Data/geners'
import Navbar from '@/components/Home/Navbar'

export default function page() {
  return (
    <>
     <Navbar />
     <div className="mt-10">
     <MovieSlider url={tvshowOnthair} title={"On The Air"} />   
     <MovieSlider url={tvshowTopRated} title={"Top Rated"} />   
     <MovieSlider url={trending} title={"Trending"} />   
     <MovieSlider url={Popular} title={"Popular"} />  
     </div>
    </>
  )
}
