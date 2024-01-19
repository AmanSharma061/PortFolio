import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
const ClipKart = () => {
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
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8  my-2 box-border '>
      <div className=' mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200  lg:mx-0 lg:flex lg:max-w-none  border border-opacity-60 bg-[#e5e5e5] box-border'>
        <div className=' max-w-full px-4 rounded-3xl box-border py-4 bg-[#e5e5e5] '>
          <img src='/clipkart.png' alt='' className='  lg:h-full' />
        </div>

        <div className='-mt-2 px-4 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 box-border bg-[#e5e5e5] rounded-3xl'>
          <div className='rounded-2xl  py-2 text-center  ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 bg-[#e5e5e5] '>
            <div className='py-6 px-4 sm:p-10 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-[#be3144]'>
                ClipKart
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
                className='mt-6 grid grid-cols-2 gap-x-2 md:text-sm text-xs  text-gray-600 sm:grid-cols-2 sm:gap-x-6'
              >
                {ClipFeatures.map(feature => (
                  <li key={feature} className='flex gap-x-2'>
                    <CheckIcon
                      className='h-6 w-5 flex-none text-[#be3144] text-xs'
                      aria-hidden='true'
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className='grid grid-cols-2 gap-x-2 '>
                <a
                  href='https://github.com/AmanSharma061/CLipcart'
                  target='_blank'
                  className='bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm mt-8 mb-4 block w-full rounded-md leading-6'
                >
                  Github
                </a>
                <a
                  href='https://clipkart.onrender.com'
                  target='_blank'
                  className='bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm mt-8 mb-4 block w-full rounded-md leading-6'
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClipKart
