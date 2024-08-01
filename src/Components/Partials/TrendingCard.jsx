import React from 'react'
import { Link } from 'react-router-dom'

const TrendingCard = ({ trending,title }) => {

    return (
        <>
            <div className='w-[100%] flex flex-wrap gap-8 justify-center bg-[#1f1E24]'>
                {trending.map((s, i) => (
                    <Link to={`/${s.media_type || title }/details/${s.id}`} key={i} className='relative w-[15%] h-[50vh]'>
                        <img className='w-[100%] h-[85%] object-cover object-center ' src={`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`} alt="" />
                        <h1 className='font-semibold text-[17px] w-[100%] h-[15%] text-zinc-400 mt-1'>
                            {
                                s.name ||
                                s.title ||
                                s.original_name ||
                                s.original_title
                            }
                        </h1>
                        {
                        s.vote_average && (
                        <div className='absolute right-[-10%] bottom-[30%] p-6 bg-blue-700 text-white w-[5vh] h-[5vh] text-xl rounded-full flex justify-center items-center'>{(s.vote_average * 10).toFixed()} <sup>%</sup></div>
                        )
                        }
                    </Link>
                ))}
            </div>
        </>
    )
}

export default TrendingCard
