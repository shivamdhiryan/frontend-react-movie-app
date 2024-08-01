import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie } from '../store/actions/movieActions';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { removemovie } from '../store/reducers/moviesSlice';
import Loading from '../../Components/Loading'
import Horizonal from './HorizontalCard'

const MovieDetails = () => {
 const {pathname} = useLocation();
 console.log(pathname)
  const {id} = useParams();
  const dispatch = useDispatch();
  const {info} = useSelector(state => state.movie);
  console.log(info);
  useEffect(()=>{
      dispatch(asyncloadmovie(id));
      return ()=>{
        dispatch(removemovie());
      }
  },[])
  return info ? (
    <>
    <div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-screen h-[120vh] p-[8%]' >
      {/* part 1 Navigation */}
      {/* <nav className='w-full flex gap-2 text-white h-[10vh]'>
      <i className="ri-earth-line"></i>
      <i className="ri-earth-line"></i>
      <i className="ri-earth-line"></i>
      <a href="_blank">tMDB</a>
      </nav> */}

     {/* part 2 details */}
      <div className='w-full flex gap-10'>
      <img className='w-[18%] h-[42vh] object-cover object-center ' src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || s.profile_path}`} alt="" />
      <div>
         <h1 className='text-white text-6xl font-bold'>{info.detail.name || 
          info.detail.title || 
          info.detail.original_name ||
          info.detail.original_title
          }
          <small className='text-2xl font-semibold ml-2'>{(info.detail.release_date).split("-")[0]}</small>
          </h1>
         <div className='flex gap-4 mt-2 '>
          {info.detail.vote_average && (
            <span  className='h-[5vh] w-[5vh] flex justify-center items-center rounded-full bg-blue-600 text-center text-white'>{(info.detail.vote_average * 10).toFixed()} <sup>%</sup> </span>
          )}
          <h1 className='text-white text-1xl'>User Score</h1>
          <h1 className='text-white text-1xl'>{info.detail.release_date}</h1>
         </div>
         <h1 className='text-white text-1xl'>{info.detail.tagline}</h1>
         <div>
          <h1 className='text-white text-2xl'>Overview</h1>
          <p className='text-white'>{info.detail.overview}</p>
         </div>
         <Link to = {`${pathname}/trailer`} className='text-white bg-blue-600 p-4 inline-block  mt-6 rounded-lg '> <i className="ri-play-fill"></i> Play Trailer</Link>
      </div>
      </div>
      <hr className='mt-8' />

      {/* part 3 recommendations */}
      <div className='mt-8'>
        <h1 className='text-white text-2xl font-bold'>Recommendations & Similar Stuff</h1>
      <Horizonal card = {info.recommendations.length > 0 ? info.recommendations : info.similar}/>
      </div>
   <Outlet/>
   </div>
  </>
   
):<Loading/>
}

export default MovieDetails
