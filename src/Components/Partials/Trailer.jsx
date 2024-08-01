import React from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound';

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector(state => state[category].info.videos);
  console.log(ytvideo);
  return (
    <div className='w-screen h-[120vh] bg-[rgba(0,0,0,.9)] absolute top-[0%] left-[0%] flex justify-center items-center'>
      <Link className="text-white text-5xl absolute top-[2%] right-[10%]" onClick={() => navigate(-1)}><i className="ri-close-line"></i></Link>
      {ytvideo ? (<ReactPlayer controls height={700} width={1200} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
      ) : (<NotFound />)}
    </div>
  )
}

export default Trailer
