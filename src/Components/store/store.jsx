import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './reducers/moviesSlice'
import tvSlice from './reducers/tvSlice'
import personSlice from './reducers/personSlice'


export const store = configureStore({
  reducer: {
    movie:moviesSlice,
    tv:tvSlice,
    person:personSlice
  },
})