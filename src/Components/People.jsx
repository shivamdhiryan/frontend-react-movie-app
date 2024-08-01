import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from './Partials/Topbar';
import Dropdown from './Partials/Dropdown';
import axios from '../utils/axios';
import Loading from './Loading';
import TrendingCard from './Partials/TrendingCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
    document.title = "SKDBS | People"
    const navigate = useNavigate();
    const [category,setCategroy] = useState("popular");
    const [people,setPeople] = useState([]);
    const [page,setPage] = useState(1);
    const [hashMore,setHashMore] = useState(true)

    const getPeople = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            if(data.results.length > 0){
                setPeople((prev)=>[...prev,...data.results]);
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
    const refreshPeople = ()=>{
        if(people.length === 0){
            getPeople()
        }
        else{
            setPage(1);
            setPeople([])
            getPeople()
        }
    }
    useEffect(()=>{
       refreshPeople()
    },[category])
  return people.length > 0 ?(
    <div className='w-[100%] h-[100vh] bg-[#1f1E24] '>
        <div className='w-[100%] p-2 flex justify-center items-center'>
            <h1 className='w-[20%] text-zinc-300  font-semibold text-[30px]'><i onClick={()=>navigate(-1)} className="ri-arrow-left-line"></i>Peoples</h1>
            <div className='w-[50%]'>   
            <Topbar/>
            </div>
            <div className='w-[20%] flex gap-2'>
            <Dropdown title = "filter" option={["popular"]} fnc = {(e)=>setCategroy(e.target.value)}/>
            <Dropdown title = "filter" option={["week","day"]} fnc = {(e)=>setDuration(e.target.value)}/>
            </div>
        </div>
        <InfiniteScroll 
        dataLength={people.length}
        next = {getPeople}
        hasMore = {hashMore}
        loader = {<h1>Loader...</h1>}
        >
            <TrendingCard trending = {people} title = {"person"}/>  
        </InfiniteScroll>
    </div>
  ):<Loading/>
}

export default People
