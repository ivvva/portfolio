import React from 'react'
import Terminal from './Terminal'

const BgText = () => {
  return (
    <div className='flex relative bg-[#191427]'>
      <div className='relative'>
          <h1
            className='text-white bg-transparent font-medium  text-[180px] font-fira-bold overflow-hidden w-screen text-right'>Ivanna Polishchuk
          </h1>
          <h1
            className='text-white bg-transparent font-medium text-[180px] font-fira-bold overflow-hidden w-screen text-left'>Frontend, Design, Animation
          </h1>
      </div>
      <div className='absolute top-14 left-[24vw] '>
        <Terminal />
      </div>
    </div>

  )
}

export default BgText