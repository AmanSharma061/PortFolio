import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import userContext from '../context/userContext'
import { FaAlignRight } from "react-icons/fa6";
export default function Navbar () {
  const { log, setLog } = useContext(userContext)
  useEffect(() => {}, [])
  const isUserLoggedIn = !!localStorage.getItem('storageToken')

  const hamburger = () => {
    if (document.getElementById('btn').style.display === 'none') {
      document.getElementById('h').style.outline = '2px solid '
      document.getElementById('h').style.outlineColor = '#ef4444'

      document.getElementById('h').style.borderRadius = '10px '
      document.getElementById('btn').style.display = 'flex'
    } else if ((document.getElementById('btn').style.display = 'flex')) {
      document.getElementById('btn').style.display = 'none'
      document.getElementById('h').style.outline = 'none  '
      document.getElementById('h').style.borderRadius = '10px '
    }
  }
  const activeLink = 'text-[#df2a61] font-bold'
  return (
    <>
      <nav className='flex   items-center text-center flex-wrap bg-white   p-6  sticky z-20    top-0  '>
        <div className='yy flex  ml-36   '>
          <h2 className=' font-medium  text-xl  tracking-tight'>
            <Link to='/' className='text-red-500 font-bold font-mono  '>
              Port|फोलियो
            </Link>
          </h2>
        </div>

        <div className='xx ml-auto mr-40 ' id='btn'>
          <ul className=' md:gap-8 sm:gap-8 gap-4   flex mt-2 font-mono font-normal tracking-wide  '>
            <li className='cursor-pointer  '>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? activeLink : '')}
              >
                Home
              </NavLink>
            </li>
            <li className='cursor-pointer   '>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? activeLink : '')}
              >
                About
              </NavLink>
            </li>
            <li className='cursor-pointer  '>
              <NavLink
                to='/contact'
                className={({ isActive }) => (isActive ? activeLink : '')}
              >
                Contact
              </NavLink>
            </li>
            <li className='cursor-pointer  '>
              <NavLink
                to='/projects'
                className={({ isActive }) => (isActive ? activeLink : '')}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>

        <img
          src='/menu.png'
          alt='scscsc'
          className='w-12 h-auto   absolute  right-8 top-3.5   md:hidden py-1 px-1  box-border'
          onClick={hamburger}
          id='h'
        />
     
      </nav>
    </>
  )
}
