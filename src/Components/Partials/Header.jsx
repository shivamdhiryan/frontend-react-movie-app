import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
    return (
        <div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${data.profile_path || data.backdrop_path})`, backgroundSize: "cover", backgroundPosition: "top" }} className='w-[100%] h-[50vh] p-[5%] flex flex-col justify-end gap-2' >

            <h1 className='text-white text-5xl font-bold'>{
                data.name ||
                data.title ||
                data.original_name ||
                data.original_title}
            </h1>
            <p className='text-white w-[50%]'>{data.overview.slice(0, 200)} ...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-700'>more</Link></p>
            <p className='text-white flex gap-2 text-[15px]'>
            <i className=" text-orange-400 ri-megaphone-line"></i>  
            {data.release_date || "No Information"}
            <i className="text-orange-400 ri-album-fill"></i>
            {data.media_type}
            </p>
           <Link to={`${data.media_type}/details/${data.id}/trailer`}><button className='bg-blue-700 px-4 py-2 text-white rounded-sm'>Watch Now</button></Link>
        </div>
    )
}

export default Header

