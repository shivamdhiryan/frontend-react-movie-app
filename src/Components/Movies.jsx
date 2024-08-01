import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from './Partials/Topbar';
import Dropdown from './Partials/Dropdown';
import axios from '../utils/axios';
import Loading from './Loading';
import TrendingCard from './Partials/TrendingCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
    document.title = "SKDBS | Popular"
    const navigate = useNavigate();
    const [category,setCategroy] = useState("now_playing");
    const [nowPlaying,setNowPlaying] = useState([]);
    const [page,setPage] = useState(1);
    const [hashMore,setHashMore] = useState(true)

    const getNowPlayingData = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if(data.results.length > 0){
                setNowPlaying((prev)=>[...prev,...data.results]);
                // console.log(data);
                setPage(page+1)
            }
            else{
                setHashMore(false);
            }
            
        }
        catch (err) {
            console.log('err', err);
        }
    }
    const refreshNowPlaying = ()=>{
        if(nowPlaying.length === 0){
            getNowPlayingData()
        }
        else{
            setPage(1);
            setNowPlaying([])
            getNowPlayingData()
        }
    }
    useEffect(()=>{
       refreshNowPlaying()
    },[category])
  return nowPlaying.length > 0 ?(
    <div className='w-[100%] h-[100vh] bg-[#1f1E24] '>
        <div className='w-[100%] p-2 flex justify-center items-center'>
            <h1 className='w-[20%] text-zinc-300  font-semibold text-[30px]'><i onClick={()=>navigate(-1)} className="ri-arrow-left-line"></i>Movies</h1>
            <div className='w-[50%]'>   
            <Topbar/>
            </div>
            <div className='w-[20%] flex gap-2'>
            <Dropdown title = "filter" option={["now_playing","popular","top_rated","up_coming"]} fnc = {(e)=>setCategroy(e.target.value)}/>
            <Dropdown title = "filter" option={["week","day"]} fnc = {(e)=>setDuration(e.target.value)}/>
            </div>
        </div>
        <InfiniteScroll 
        dataLength={nowPlaying.length}
        next = {getNowPlayingData}
        hasMore = {hashMore}
        loader = {<h1>Loader...</h1>}
        >
            <TrendingCard trending = {nowPlaying} title = "movie"/>  
        </InfiniteScroll>
    </div>
  ):<Loading/>
}

export default Movies
