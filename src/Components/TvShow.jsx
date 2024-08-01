import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from './Partials/Topbar';
import Dropdown from './Partials/Dropdown';
import axios from '../utils/axios';
import Loading from './Loading';
import TrendingCard from './Partials/TrendingCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const TvShow = () => {
    document.title = "SKDBS | TVShow"
    const navigate = useNavigate();
    const [category,setCategroy] = useState("airing_today");
    const [tvShow,setTvShow] = useState([]);
    const [page,setPage] = useState(1);
    const [hashMore,setHashMore] = useState(true)

    const getTvShow = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            if(data.results.length > 0){
                setTvShow((prev)=>[...prev,...data.results]);
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
    const refreshTvShow = ()=>{
        if(tvShow.length === 0){
            getTvShow()
        }
        else{
            setPage(1);
            setTvShow([])
            getTvShow()
        }
    }
    useEffect(()=>{
       refreshTvShow()
    },[category])
  return tvShow.length > 0 ?(
    <div className='w-[100%] h-[100vh] bg-[#1f1E24] '>
        <div className='w-[100%] p-2 flex justify-center items-center'>
            <h1 className='w-[20%] text-zinc-300  font-semibold text-[30px]'><i onClick={()=>navigate(-1)} className="ri-arrow-left-line"></i>Tv Show</h1>
            <div className='w-[50%]'>   
            <Topbar/>
            </div>
            <div className='w-[20%] flex gap-2'>
            <Dropdown title = "filter" option={["on_the_air","popular","top_rated","airing_today"]} fnc = {(e)=>setCategroy(e.target.value)}/>
            <Dropdown title = "filter" option={["week","day"]} fnc = {(e)=>setDuration(e.target.value)}/>
            </div>
        </div>
        <InfiniteScroll 
        dataLength={tvShow.length}
        next = {getTvShow}
        hasMore = {hashMore}
        loader = {<h1>Loader...</h1>}
        >
            <TrendingCard trending = {tvShow} title = "tv"/>  
        </InfiniteScroll>
    </div>
  ):<Loading/>
}

export default TvShow
