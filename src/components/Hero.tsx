import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'

function Hero() {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
    const [movieList, setMovieList] = useState<any>([])
    useEffect(() => {
        getPopularMovies()
    }, [])
    const getPopularMovies = () => {
        GlobalApi.getPopularMovies.then((res: any) => {
            const result = res.data.results;
            const randomNum = Math.floor(Math.random() * 10);
            setMovieList(result[randomNum]);
        })
    }
    return (
        <section>
            <div className='absolute h-[85vh] bg-gradient-to-t from-[#1e2126] via-transparent to-transparent w-full'></div>
            <div className='absolute mt-[400px] md:mt[350px] px-10 md:px-24'>
                <h2 className='text-white text-[19px] lg:text-[27px]'>Watch only Hulu</h2>
                <h2 className='text-white text-[35px] lg:text-[47px] font-bold'>{movieList.original_title}</h2>
                <div className='flex gap-5 mt-5'>
                    <button>PLAY</button>
                    <button className='bg-transparent border-2 border-white text-white cursor-pointer hover:border-gray-500'>DETAILS</button>
                </div>
            </div>
            <img src={IMAGE_BASE_URL + movieList.backdrop_path} alt="" width={1920} height={1080} className='h-[85vh] object-cover' />
        </section>
    )
}

export default Hero