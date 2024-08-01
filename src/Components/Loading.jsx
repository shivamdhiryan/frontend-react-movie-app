import React from 'react'
import loader from '../../public/loading.png'

const Loading = () => {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
      <img className='h-[60%]' src={loader} alt="" />
    </div>
  )
}

export default Loading
