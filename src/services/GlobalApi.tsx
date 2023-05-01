import axios from "axios"
const api_key = import.meta.env.VITE_REACT_APP_TMDB_API_KEY

const movieBaseURL = 'https://api.themoviedb.org/3/movie'
const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`

const getPopularMovies = axios.get(`${movieBaseURL}/popular?api_key=${api_key}`)
const getMovieByGenreid = (id: number) => axios.get(movieByGenreBaseURL + "&with_genres=" + id)

export default {
    getPopularMovies,
    getMovieByGenreid
}