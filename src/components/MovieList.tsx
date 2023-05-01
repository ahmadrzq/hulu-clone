import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList(genreId: any) {
    const elementRef = useRef(null);
    const [movieList, setMovieList] = useState<any>([])
    useEffect(() => {
        getMovieListByGenreId();
    }, [])
    const slideRight = (element:any) => {
        element.scrollLeft+=500;
    }
    const slideLeft = (element:any) => {
        element.scrollLeft-=500;
    }
    const getMovieListByGenreId = () => {
        GlobalApi.getMovieByGenreid(genreId.genreId).then((res: any) => {
            setMovieList(res.data.results)
        })
    }
    return (
        <div className='flex items-center'>
            <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} className='text-white text-[40px] z-10 bg-black p-2 cursor-pointer mb-[120px] rounded-full'/>
            <div id='slider' className='w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-16 ml-[-40px]' ref={elementRef}>
                {movieList.map((item: any, index: any) => index < 7 && (
                    <MovieCard movie={item} key={index} />
                ))}
            </div>
            <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className='text-white text-[40px] z-10 bg-black p-2 mb-[120px] cursor-pointer rounded-full ml-[-25px]'/>
        </div>
    )
}

// function MovieList(genreId: any) {
//     const [movieList, setMovieList] = useState<any>([]);
//     const elementRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         getMovieListByGenreId();
//     }, []);

//     useEffect(() => {
//         const element = elementRef.current;

//         const handleScroll = () => {
//             const isLeftVisible = element?.scrollLeft > 0;
//             const isRightVisible = element?.scrollLeft + element?.clientWidth < element?.scrollWidth;

//             setIsScrollLeftVisible(isLeftVisible);
//             setIsScrollRightVisible(isRightVisible);
//         };

//         element?.addEventListener('scroll', handleScroll);

//         return () => {
//             element?.removeEventListener('scroll', handleScroll);
//         };
//     }, [elementRef]);

//     const [isScrollLeftVisible, setIsScrollLeftVisible] = useState(false);
//     const [isScrollRightVisible, setIsScrollRightVisible] = useState(true);

//     const slideLeft = (element:any) => {
//         if (element) {
//             element.current.scrollLeft -= 500;
//         }
//     };

//     const slideRight = (element:any) => {
//         if (element) {
//             element.current.scrollLeft += 500;
//         }
//     };

//     const getMovieListByGenreId = async () => {
//         const response = await GlobalApi.getMovieByGenreid(genreId.genreId);
//         setMovieList(response.data.results);
//     };

//     return (
//         <div className="flex items-center">
//             {isScrollLeftVisible && (
//                 <IoChevronBackOutline
//                     onClick={slideLeft}
//                     className="text-white text-[40px] z-10 bg-black p-2 cursor-pointer mb-[120px] rounded-full"
//                 />
//             )}
//             <div
//                 id="slider"
//                 className="w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-16 ml-[-40px]"
//                 ref={elementRef}
//             >
//                 {movieList.slice(0, 7).map((item: any, index: number) => (
//                     <MovieCard movie={item} key={index} />
//                 ))}
//             </div>
//             {isScrollRightVisible && (
//                 <IoChevronForwardOutline
//                     onClick={slideRight}
//                     className="text-white text-[40px] z-10 bg-black p-2 mb-[120px] cursor-pointer rounded-full ml-[-25px]"
//                 />
//             )}
//         </div>
//     );
// }

export default MovieList