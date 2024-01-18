import React, { useEffect } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImGithub } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const ClipFeatures = [
  'Html & CSS',
  'Javascript XML',
  'Javascript',
  'React Js ',
  'Context API',
  'Express Js',
  'MongoDB',
  'Node Js'
]
const TripFeatures = [
  'Html & CSS',
  'Javascript XML',
  'Javascript',
  'React Js ',
  'Context API',
  'Google-maps-react',
  'Rapid API'
]

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
        <div className='bg-white py-3   sm:py-32 mt-6 '>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            {/* creating tihub and linked in links using react icons */}
            <div className='w-full flex  justify-between gap-x-4 px-[10%]'>
              <Link className='flex  items-center gap-x-2' to={'https://github.com/AmanSharma061'} target='_blank'> <span><ImGithub /></span> Github</Link>
              <Link className='flex  items-center gap-x-2' to={'https://linkedin.com/in/amansharma061'} target='_blank'> <span><FaLinkedin  /></span> Linkedin</Link>
              <Link className='flex  items-center gap-x-2' to={'https://instagram.com/aman.sharma061'} target='_blank'> <span><FaInstagram  /></span> Instagram</Link>
              <Link className='flex  items-center gap-x-2' to={'https://twitter.com/AmanSharma061'} target='_blank'> <span><FaXTwitter /></span> Twitter</Link>
            
            </div>
          </div>
        </div>
        {/*  */}
        <div className='mx-auto max-w-7xl px-6 lg:px-8  '>
          <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none border border-opacity-60'>
            <div className='py-6 px-4 sm:p-10 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-[#be3144]'>
                CLipCart
              </h3>
              <p className='md:mt-4 sm:mt-4 mt-2 md:text-base text-xs md:leading-7 leading-5 text-gray-600'>
                Solely crafted and implemented an entire e-commerce project,
                CLipcart, demonstrating my self-driven initiative and skillset
                in building scalable, user-centric platforms from inception.
              </p>
              <div className='mt-4 flex items-center gap-x-4'>
                <h4 className='flex-none text-sm font-semibold leading-6 text-[#be3144]'>
                  Technologies used
                </h4>
                <div className='h-px flex-auto bg-gray-100' />
              </div>
              <ul
                role='list'
                className='mt-6 grid grid-cols-2 gap-3 md:text-sm text-xs leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
              >
                {ClipFeatures.map(feature => (
                  <li key={feature} className='flex gap-x-2'>
                    <CheckIcon
                      className='h-6 w-5 flex-none text-[#be3144]'
                      aria-hidden='true'
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className='-mt-2 p-4 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
              <div className='rounded-2xl bg-gray-50 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                <div className='mx-auto max-w-xs px-4'>
                  <p className='-mt-10 -mb-20 flex items-baseline justify-center gap-x-2'>
                    {/* Video */}
                    <img src='/Logo.png' alt='' className=' z-auto' />
                  </p>
                  <p className='mt-6 text-xs leading-5 text-gray-600'>
                    All the code is in the Github Repository and the link is
                    given below.
                  </p>
                  <a
                    href='https://github.com/AmanSharma061/CLipcart'
                    target='_blank'
                    className='bg-[#be3144] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm mt-8 mb-4 block w-full rounded-md leading-6'
                  >
                    View Project
                  </a>
                  <a
                    href='https://clipkart.onrender.com/'
                    target='_blank'
                    className='underline'
                  >
                    Deployed link
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second */}

        <div className='mx-auto max-w-7xl px-6 lg:px-8  my-2'>
          <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none  border border-opacity-60'>
            <div className='py-6 px-4 sm:p-10 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-[#be3144]'>
                Trip BLiss
              </h3>
              <p className='md:mt-4 sm:mt-4 mt-2 md:text-base text-xs md:leading-7 leading-5 text-gray-600'>
                Trip Bliss: Instantly discover nearby hotels, restaurants, and
                attractions for an effortless travel experience. Your ultimate
                guide to making every trip memorable.
              </p>
              <div className='mt-4 flex items-center gap-x-4'>
                <h4 className='flex-none text-sm font-semibold leading-6 text-[#be3144]'>
                  Technologies used
                </h4>
                <div className='h-px flex-auto bg-gray-100' />
              </div>
              <ul
                role='list'
                className='mt-6 grid grid-cols-2 gap-3 md:text-sm text-xs leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
              >
                {TripFeatures.map(feature => (
                  <li key={feature} className='flex gap-x-2'>
                    <CheckIcon
                      className='h-6 w-5 flex-none text-[#be3144]'
                      aria-hidden='true'
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className='-mt-2 p-4 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
              <div className='rounded-2xl bg-gray-50 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                <div className='mx-auto max-w-xs px-4'>
                  <p className='pt-16 flex items-baseline justify-center gap-x-2'>
                    {/* Video */}
                    <img src='/trip.png' alt='' className='   text-white  ' />
                  </p>
                  <p className='mt-6 text-xs leading-5 text-gray-600'>
                    All the code is in the Github Repository and the link is
                    given below.
                  </p>
                  <a
                    href='https://github.com/AmanSharma061/Trip-Bliss'
                    target='_blank'
                    className='bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm mt-8 mb-4 block w-full rounded-md leading-6'
                  >
                    View Project
                  </a>
                  <a
                    href='https://tripbliss.vercel.app/'
                    target='_blank'
                    className='underline'
                  >
                    Deployed link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
