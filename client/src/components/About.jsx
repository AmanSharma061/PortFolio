import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import Skills from './Skills'

function About () {


  return (
    <>
      <div>
        <section className='flex items-center bg-white xl:h-screen font-poppins dark:bg-white -mt-12 '>
          <div className='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
            <div className='px-4 mb-10 md:text-center md:mb-20'>
              <p className='mb-2 text-lg font-semibold text-red-400 dark:text-gray-900'>
                About Me
              </p>
              <h2 className='pb-2 text-2xl font-bold text-gray-900 md:text-4xl dark:text-gray-900'>
                What I do
              </h2>
              <div className='flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14'>
                <div className='flex-1 h-2 bg-red-200'></div>
                <div className='flex-1 h-2 bg-red-400'></div>
                <div className='flex-1 h-2 bg-red-300'></div>
              </div>
            </div>
            <div className='flex flex-wrap '>
              <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
                <img
                  src="/programmer.png"
                  alt=''
                  className='relative z-10 object-cover w-full h-96'
                />
              </div>
              <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0 '>
                <h2 className='py-3 pl-2 mb-4 text-2xl font-bold text-gray-800 border-l-4 border-red-500 dark:border-red-400 dark:text-gray-800'>
                  Crafting Dynamic, User-Centric Websites.
                </h2>
                <p className='mb-4 text-base leading-7 text-gray-800 dark:text-gray-800'>
                  I am a skilled web developer proficient in crafting dynamic
                  and responsive websites, with expertise in front-end and
                  back-end technologies. My passion lies in creating seamless
                  online experiences through innovative coding and design.
                </p>
                <ul className='mb-10'>
                  <li className='flex items-center mb-4 text-base text-gray-800 dark:text-gray-800'>
                    <span className='mr-3 text-red-500 dark:text-red-400 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='w-5 h-5 bi bi-patch-check-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
                      </svg>
                    </span>
                    Front-end development using HTML, JavaScript, CSS, and
                    React.
                  </li>
                  <li className='flex items-center mb-4 text-base text-gray-800 dark:text-gray-800'>
                    <span className='mr-3 text-red-500 dark:text-red-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='w-5 h-5 bi bi-patch-check-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
                      </svg>
                    </span>
                    Back-end development using Node.js, Express, and MongoDB.
                  </li>
                  <li className='flex items-center mb-4 text-base text-gray-800 dark:text-gray-800'>
                    <span className='mr-3 text-red-500 dark:text-red-400 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='w-5 h-5 bi bi-patch-check-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
                      </svg>
                    </span>
                    Frameworks like Bootstrap, Tailwind CSS, and Material UI.
                  </li>
                </ul>
            
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  )
}

export default About
