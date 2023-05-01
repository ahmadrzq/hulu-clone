import React from 'react'

import { IoChevronForwardSharp } from 'react-icons/io5'
import MovieList from './MovieList'
import GenresList from '../data/GenresList'

function GenreMovieList() {
    return (
        <section className='mt-24 p-5 px-10 md:px-20'>
            {GenresList.genre.map((item: any, index) => index < 5 && (
                <div key={index}>
                    <h2 className='text-white text-[23px] font-bold flex justify-between'>{item.name}
                        <span className='font-normal text-[16px] cursor-pointer text-gray-400 flex items-center ml-5'>
                            VIEW ALL
                            <IoChevronForwardSharp className='text-white ml-1' />
                        </span>
                    </h2>

                    <MovieList genreId={item.id} />
                </div>
            ))}
        </section>
    )
}

export default GenreMovieList