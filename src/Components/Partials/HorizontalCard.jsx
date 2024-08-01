import React from 'react'
import { Link } from 'react-router-dom'
// import Dropdown from './Dropdown'

const HorizontalCard = ({card}) => {
  return  (
    <div className='w-[100%] h-[40vh] p-4'>
     {/* <div className='flex justify-between'>
        <h1 className='text-[25px] font-bold text-white'>Trending</h1>
        <Dropdown title = "filter" option = {["tv","movie","all"]}/>
     </div> */}
     <div className='w-[100%] h-[100%] flex overflow-y-auto'>
        {card.length > 0 ? card.map((s,i)=><Link to={`/${s.media_type}/details/${s.id}`} key={i} className='min-w-[15%] h-[100%] ml-2 bg-zinc-900  '>
            <img className='w-[100%] h-[40%] object-cover object-top' src={`https://image.tmdb.org/t/p/original/${s.profile_path ||  s.backdrop_path || s.poster_path}`} alt="" />
            <div className='text-white p-3 w-[100%] h-[60%]'>
            <h1 className='font-bold '>{
                s.name ||
                s.title ||
                s.original_name ||
                s.original_title
                }
            </h1>
            <p className='text-white text-[14px]'>{s.overview.slice(0,50)} ...<span className='text-zinc-700'>more</span></p>
        </div>
        </Link>):<h1>Nothing show data</h1>}
     </div>
    </div>
  )
}

export default HorizontalCard
