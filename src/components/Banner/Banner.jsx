import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className='flex justify-center items-center mt-25 h-[50vh] bg-center bg-cover relative' style={{backgroundImage: `url(${bgImage})`}
    }>
      <h2 className='text-5xl text-zinc-700 bg-white p-5 rounded-xl font-bold z-10'>{title}</h2>
      <div className='bg-black/20 absolute inset-0'></div>
    </div>
  )
}

export default Banner
