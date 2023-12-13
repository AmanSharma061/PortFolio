import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import { ToastContainer, toast } from 'react-toastify'
import { ThreeDots } from 'react-loader-spinner'
import About from './About'
import Contact from './Contact'
function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <ToastContainer />

      <div id='typing' className='font-bold  text-3xl m-48 text-red-500'>
        <h2 className='text-4xl font-light'>Hi ! I'm Aman</h2>
        <span className='text-base ml-2 text-[#24527a]'>
          <Typewriter
            words={[
              'A Full Stack Web Developer ',
              ' Programmer',

              'and  Learner    '
            ]}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            bacdelay={50}
          />
        </span>
      </div>

      <div className=' relative bottom-36 left-48 w-fit   ' id='resume'>
        <button
          id='rbutton'
          className='bg-[#df2a61] hover:bg-[#be3144] text-gray-100 font-bold py-2 px-3 rounded flex  items-center'
        >
          <svg
            className='fill-current w-4 h-4 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
          </svg>
          <span>
            <a href='./public/resume.jpg' download>
              Resume
            </a>
          </span>
        </button>
      </div>
      <div id='about' className='mt-28
      '>
        <About />
      </div>
      <div id='contact' className='mt-16 mb-10'>
        <Contact />
      </div>
    </>
  )
}

export default Home
