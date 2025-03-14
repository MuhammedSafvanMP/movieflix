
// movies
export const Popular = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
export const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`;
export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_networks=213`;
export const ComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`;
export const HorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`;
export const ActionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`;
export const RomanceMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`;
export const Documentaries = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`;
// export const malayalam = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLICAPI_KEY}&query=malayalam`;
export const now_playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;
export const upcoming =  `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;

// tv seris list
export const tvshowOnthair =  `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;
export  const tvshowTopRated =    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;
export const airingToday = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
export const tvseriesPopular = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`

// search movie
export const search = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&include_adult=false&language=en-US&page=1&query`;
export const defultSerch = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;




