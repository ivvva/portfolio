import React from 'react'
import terminal from '../assets/terminal.png'
import Typewriter from 'typewriter-effect';

const Terminal = () => {

  return (
    <div flex justify-center>
      <div className='absolute top-20 left-5'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('home@main~ $ cd portfolio')
              .pauseFor(1500)
              .start();
          }}
        />
      </div>
      <div className='absolute top-36 left-5'>
      <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(4500)
            .typeString('/portfolio~ $ ls ')
              .start();
          }} 
          />
        {/* <h1 className='bg-white text-xl font-medium font-fira-bold'>/portfolio~ $ ls </h1> */}
      </div>
      <div className='absolute top-52 left-5 outline-none border-none flex justify-between'>
        <a href='#' className='bg-white pl-10 pr-16 text-xl font-medium font-fira-bold text-gray-500 outline-none hover:text-green-500'>home </a>
        <a href='#' className='bg-white pr-16 text-xl font-medium font-fira-bold text-gray-500 outline-none hover:text-green-500'>about </a>
        <a href='#' className='bg-white pr-16 text-xl font-medium font-fira-bold text-gray-500 outline-none hover:text-green-500'>toolkit </a>
        <a href='#' className='bg-white text-xl font-medium font-fira-bold text-gray-500 outline-none hover:text-green-500'>contact </a>
      </div>
      <div>
        <img src={terminal} alt='terminal' />
      </div>
    </div>
  )
}

export default Terminal