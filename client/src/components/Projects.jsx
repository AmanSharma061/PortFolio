import React, { useEffect } from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImGithub } from 'react-icons/im'
import { FaInstagram } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import ClipKart from './PROJECTS/ClipKart'
import Tripbliss from './PROJECTS/Tripbliss'
import SafeKey from './PROJECTS/SafeKey.io'



function Projects () {
  const [count, setcount] = useState(0)

  const getter = async () => {
    const res = await fetch('https://api.github.com/users/AmanSharma061/repos')
    const data = await res.json()
    setcount(data.length)
  }

  useEffect(() => {
    getter()
  }, [count])
  const stats = [
    { id: 1, name: 'Front-end Projects ', value: '05' },
    { id: 2, name: 'Full Stack Projects', value: '03' }
  ]
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <div>
        <div className='bg-white     mt-4  '>
          <div className='mx-auto max-w-7xl px-6 lg:px-8 '>
            <div className='flex w-full justify-between '>
              <div className='lg:flex  justify-around w-full grid grid-cols-2 gap-x-24 px-8 gap-y-4 '>
                <Link
                  className='flex  items-center gap-x-2'
                  to={'https://github.com/AmanSharma061'}
                  target='_blank'
                >
                  {' '}
                  <span>
                    <ImGithub />
                  </span>{' '}
                  Github
                </Link>
                <Link
                  className='flex  items-center gap-x-2'
                  to={'https://linkedin.com/in/amansharma061'}
                  target='_blank'
                >
                  {' '}
                  <span>
                    <FaLinkedin />
                  </span>{' '}
                  Linkedin
                </Link>
                <Link
                  className='flex  items-center gap-x-2'
                  to={'https://instagram.com/aman.sharma061'}
                  target='_blank'
                >
                  {' '}
                  <span>
                    <FaInstagram />
                  </span>{' '}
                  Instagram
                </Link>
                <Link
                  className='flex  items-center gap-x-2'
                  to={'https://twitter.com/AmanSharma061'}
                  target='_blank'
                >
                  {' '}
                  <span>
                    <FaXTwitter />
                  </span>{' '}
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
        
   <ClipKart/>
   {/* <Tripbliss/> */}
   <SafeKey/>
    
        {/*  Third */}
      </div>
    </>
  )
}

export default Projects
