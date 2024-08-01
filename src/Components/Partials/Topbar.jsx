import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import noPhoot from '../../../public/nophoto.jpeg'

const Topbar = () => {
    const [query,setQuery] = useState("");
    const [imagedata,setImageData] = useState([]);

    const movieSearchData = async ()=>{
      try{
        const {data} = await axios.get(`/search/multi?query=${query}`);
        setImageData(data.results);
      }
      catch(err){
        console.log('err',err);
      }
    }
    

    useEffect(()=>{
      movieSearchData();
    },[query])
  return (
    <div className='w-[100%] h-[10vh] relative flex justify-center items-center mt-2'>
        <i className="text-[30px] text-zinc-300 mr-2 ri-search-line"></i>
         <input onChange={(e)=>setQuery(e.target.value)} value={query} className='w-[50%] bg-zinc-800 text-white p-4 border-none outline-none' type="text" placeholder='enter anything'/>
         {query.length > 0 && <i onClick={()=>setQuery("")} class="text-[30px] text-zinc-300 ri-close-line"></i>}
         <div className='w-[50%] z-[100]  max-h-[50vh] absolute top-[100%] left-[25.5%] overflow-auto'>
           {imagedata.map((s,i)=> <Link to={`/${s.media_type}/details/${s.id}`} className='flex border-b-2 gap-4 border-zinc-400 bg-red-100 p-4 text-center font-semibold text-[20px] rounded'>
            <img className='w-[10vh] h-[10vh] rounded-md object-cover object-center' src={s.profile_path || s.backdrop_path ?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`:noPhoot} alt="" />
            <span>{s.name || 
            s.title || 
            s.original_name || 
            s.original_title}
            </span>  
            </Link>)}
         </div>
    </div>
  )
}

export default Topbar
 