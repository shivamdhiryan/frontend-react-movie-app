import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Partials/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import TvShow from './Components/TvShow'
import People from './Components/People'
import TvDetails from './Components/Partials/TvDetails'
import MovieDetails from './Components/Partials/MovieDetails'
import PeopleDetails from './Components/Partials/PeopleDetails'
import Trailer from './Components/Partials/Trailer'
import NotFound from './Components/NotFound'


const App = () => {
  return (
    <div classNameNameNameName='w-screen h-screen bg-[#1f1E24] flex'>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/trending' element = {<Trending/>}/>
      <Route path='/popular' element = {<Popular/>}/>
      <Route path='/movie' element = {<Movies/>}/>
      <Route path='/movie/details/:id' element = {<MovieDetails/>}>
         <Route path='/movie/details/:id/trailer' element = {<Trailer/>}/>
      </Route>
      <Route path='/tv' element = {<TvShow/>}/>
      <Route path='/tv/details/:id' element = {<TvDetails/>}>
         <Route path='/tv/details/:id/trailer' element = {<Trailer/>}/>
      </Route>
      <Route path='/person' element = {<People/>}/>
      <Route path='/person/details/:id' element = {<PeopleDetails/>}/>
      <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
