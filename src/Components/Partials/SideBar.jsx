import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='w-[20%]  h-[100%] p-6 border-r-2 border-r-zinc-200 text-zinc-300'>
            <h1>
                <i className=" text-[30px] ri-tv-line"></i>
                <span className='font-bold text-[25px] ml-4'>SKDBS</span>
            </h1>
            <nav className='flex flex-col'>
                <h1 className='text-[20px] font-bold mb-2'>New Feeds</h1>
                <Link to = "/trending" className='w-[100%] hover:bg-slate-700 duration-300 p-4 rounded '><i className="mr-2 ri-fire-line"></i> Trending</Link>
                <Link to= "/popular" className='w-[100%] hover:bg-slate-700 duration-300 p-4 rounded '><i className="mr-2 ri-bard-line"></i> Popular</Link>
                <Link to= "/movie" className='w-[100%] hover:bg-slate-700 duration-300 p-4 rounded '><i className="mr-2 ri-movie-fill"></i> Movies</Link>
                <Link to="/tv" className='w-[100%] hover:bg-slate-700 duration-300 p-4 rounded '><i className="mr-2 ri-tv-2-line"></i> Tv Shows</Link>
                <Link to = "/person" className='w-[100%] hover:bg-slate-700 duration-300 p-4 rounded '><i className="mr-2 ri-group-fill"></i> People</Link>
                <hr className='mt-2' />
                <h1 className='text-[20px] font-bold mt-2'>Website Information</h1>
                <Link className='w-[100%] hover:bg-slate-700 duration-300 p-4 rounded mt-4 '><i className=" mr-2 ri-error-warning-line"></i> About</Link>
                <Link className='w-[100%] hover:bg-slate-700 duration-300 p-4 rounded '><i className=" mr-2 ri-contacts-line"></i> Contact Us</Link>
            </nav>

        </div>

    )
}

export default SideBar
