import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson } from '../store/actions/personAction';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { removeperson } from '../store/reducers/personSlice';
import Loading from '../../Components/Loading'
import HorizontalCard from './HorizontalCard';
import Dropdown from './Dropdown';
import noPhoot from '../../../public/nophoto.jpeg'

const PeopleDetails = () => {
  const {pathname} = useLocation();
  const [category,setCategroy] = useState("movie");
  const navigate = useNavigate();
 console.log(pathname)
  const {id} = useParams();
  const dispatch = useDispatch();
  const {info} = useSelector(state => state.person);
  console.log(info);
  useEffect(()=>{
      dispatch(asyncloadperson(id));
      return ()=>{
        dispatch(removeperson());
      }
  },[])
  return info ? (
    <div className='w-screen h-[160vh] bg-[#1f1E24] p-10'>
     <Link onClick={()=>navigate(-1)} className='text-3xl text-zinc-300'><i className="ri-arrow-left-line"></i></Link>
     {/* left section */}
     <div className='flex h-[100%] gap-10'>
     <div className='w-[20%] h-[100%]'>
        <img className='w-[100%] h-[42vh] object-cover object-center ' src={info.detail.backdrop_path || info.detail.profile_path ?`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.profile_path}`: noPhoot} alt="" />
        <hr className='mt-5 mb-4 h-[1vh] border-none bg-zinc-300' />
         <div className='flex gap-7 w-[100%]'>
          <a className='text-3xl text-white' href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-line"></i></a>
          <a className='text-3xl text-white' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-circle-line"></i></a>
          <a className='text-3xl text-white' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-line"></i></a>
          <a className='text-3xl text-white' href={`https://x.com/${info.externalid.twitter_id}`}><i className="ri-twitter-x-line"></i></a>
         </div>
         <div className='w-[100%] flex flex-col gap-3'>
         <h1 className='font-bold text-zinc-300 text-2xl mt-2'>Personal Info</h1>
         <h1 className='font-bold text-zinc-300 text-xl '>Known for</h1>
         <h1 className='font-semibold text-zinc-300 text-[15px]'>{info.detail.known_for_department}</h1>
         <h1 className='font-bold text-zinc-300 text-xl'>Gender</h1>
         <h1 className='font-semibold text-zinc-300 text-[15px]'>{info.detail.gender == 2 ? "Male":"Female"}</h1>
         <h1 className='font-bold text-zinc-300 text-xl'>Birthday</h1>
         <h1 className='font-semibold text-zinc-300 text-[15px]'>{info.detail.birthday}</h1>
         <h1 className='font-bold text-zinc-300 text-xl'>Deathday</h1>
         <h1 className='font-semibold text-zinc-300 text-[15px]'>Still Alive</h1>
         <h1 className='font-bold text-zinc-300 text-xl'>Place Of Birth</h1>
         <h1 className='font-semibold text-zinc-300 text-[15px]'>{info.detail.place_of_birth}</h1>
         <h1 className='font-bold text-zinc-300 text-xl'>Also Known As</h1>
         <h1 className='font-semibold text-zinc-300 text-[15px]'>{(info.detail.also_known_as).join(" ")}</h1>
         </div>
     </div>
     <div className='w-[80%] h-[100%]'>
       <h1 className='text-zinc-300 text-8xl font-bold'>{info.detail.name}</h1>
       <h1 className='font-semibold mt-4 text-zinc-300 text-2xl'>Biography</h1>
       <p className='text-zinc-300'>{(info.detail.biography).slice(0,900)}</p>
       <h1 className='font-semibold mt-4 text-zinc-300 text-2xl'>Known For</h1>
       <HorizontalCard card = {info.combinedCredits.data.cast} />
       <div className='flex justify-between'>
        <h1 className='font-semibold mt-4 text-zinc-300 text-2xl'>Acting</h1>
        <Dropdown title = "Category" option = {["tv","movie"]} fnc = {(e)=>setCategroy(e.target.value)}/>
       </div>
       <div className='w-[100%] h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.5)] text-zinc-300 mt-4 p-4'>
        {info[category + "Credits"].data.cast.map((s,i)=>(
          <Link to={`/${category}/details/${s.id}`}>
          <li key={i} className='hover:text-white p-4 rounded-lg hover:bg-black'>
            {s.name || 
          s.title || 
          s.original_name ||
          s.original_title
          }
          <p className='p-4'>{s.character && `Character Name : ${s.character}`}</p>
          </li>
          </Link>
        ))}
        <li>list bar</li>
       </div>
     </div>
     </div>
    </div>
  ):<Loading/> 
}

export default PeopleDetails
