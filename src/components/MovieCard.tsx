function MovieCard(movie: any) {
    return (
        <div className='inline-block m-2 md:m-3 cursor-pointer group'>
            <img src={`https://image.tmdb.org/t/p/original/${movie.movie.backdrop_path}`} alt="" className='w-[230px] md:w-[370px] object-cover rounded-2xl group-hover:border-[5px] border-gray-400 p-2 transition-all duration-300 ease-in-out' />
            <h2 className='text-gray-400 mt-2 text-[12px] md:text-[17px] font-bold'>{movie.movie.id % 2 == 0 ? 'Watch Movie' : 'Start Watching'}</h2>
            <h2 className='text-white mt-1 transition-all md:text-[22px] group-hover:font-bold'>{movie.movie.original_title}</h2>
        </div>
    )
}

export default MovieCard