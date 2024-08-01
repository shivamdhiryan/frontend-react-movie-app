import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Topbar from './Topbar'
import Header from './Header'
import axios from '../../utils/axios'
import HorizontalCard from './HorizontalCard'
import Dropdown from './Dropdown'
import Loading from '../Loading'

const Home = () => {
    const [wallpaper, setWallPaper] = useState(null)
    const [horizontalData,setHorizontalData] = useState(null);
    const [category,setCategroy] = useState("all");
    const headerData = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let randomImg = data.results[(Math.random() * data.results.length).toFixed()];
            setWallPaper(randomImg);
        }
        catch (err) {
            console.log('err', err);
        }
    }

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            setHorizontalData(data.results);
        }
        catch (err) {
            console.log('err', err);
        }
    }
    useEffect(() => {
        !wallpaper && headerData();
         getTrending();
    }, [category])
    return wallpaper && horizontalData ? (<>
        <SideBar />
        <div className='w-[80%] h-[100%] overflow-x-hidden'>
            <Topbar />
            <Header data={wallpaper} />
            <div className='flex justify-between p-4'>
        <h1 className='text-[25px] font-bold text-white'>Trending</h1>
        <Dropdown fnc = {(e)=>setCategroy(e.target.value)} title = "filter" option = {["tv","movie","all"]}/>
     </div>
            <HorizontalCard card = {horizontalData}/>
        </div>
    </>) : <Loading/>
}

export default Home
