import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import userContext from '../context/userContext'
import { ThreeDots } from 'react-loader-spinner'

function Login () {
  const { log, setLog } = useContext(userContext)

  const navigate = useNavigate() // for navigation
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const emailHandler = even => {
    setEmail(even.target.value)
  }

  const passwordHandler = even => {
    setPassword(even.target.value)
  }

  useEffect(() => {
    submitHandler()
  })
  const submitHandler = async event => {
    event.preventDefault()

    const response = await fetch('https://portfolio-mjax.onrender.com/login', {
      // fetching data from backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const responseData = await response.json()
    // checking the response from backend);
    const err = responseData.error
    const msg = responseData.message
    const storageToken = responseData.token

    if (err === 'Please fill all the fields') {
      toast.warn('Please fill all the fields !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      return
    } else if (msg === 'User Login Successfully') {
      setLog(true)

      document.getElementById('ll').classList.add('hidden')
      toast.success('Logged in Successfully !', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      document.getElementById('spinner').classList.remove('hidden')
      setTimeout(() => {
        navigate('/')
      }, 2000)
      localStorage.setItem('storageToken', storageToken) // setting the log value in local storage
      return
    } else if (err === 'Invalid Credentials') {
      toast.error('Invalid Credentials !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
    }
  }

  return (
    <>
      <div
        className='w-full  flex -z-10 items-center justify-center h-[80vh] hidden '
        id='spinner'
      >
        <ThreeDots color='#df2a61' height={80} width={80} />
      </div>
      <ToastContainer />
      <div className=' ss flex  items-center text-center  ' id='ll'>
        <div className=' h-[60vh] w-[100vw]    flex justify-center md:border-0 rounded-lg md:shadow-lg shadow- cc'>
          <img src='./login.jpg' alt='' className=' border-0 ' id='rimg' />

          <form
            method='POST'
            className='w-[90%] h-full gap-4  flex flex-col  my-16'
            id='fm'
          >
            <h1 className='font-extrabold text-3xl relative top-[-8%] text-red-400 font-mono '>
              Log in
            </h1>

            <div className='flex justify-center items-center text-center mt-[3%] '>
              <label htmlFor='email'>
                <i
                  className='fa fa-envelope relative left-3'
                  style={{ fontSize: '12px' }}
                ></i>
              </label>
              <input
                onChange={emailHandler}
                type='text'
                name='email'
                value={email}
                autoComplete='off'
                className=' bg-transparent outline-none px-4 w-[90%] '
                placeholder='Your Email'
              />
              <br />
            </div>

            <div className='flex justify-center items-center text-center mt-[3%]'>
              <label htmlFor='email'>
                <i className='fa fa-lock relative left-3'></i>
              </label>
              <input
                onChange={passwordHandler}
                type='password'
                name='password'
                value={password}
                className=' outline-none px-4 w-[90%]'
                placeholder='Password'
              />
              <br />
            </div>

            <div className='flex justify-center items-center text-center mt-[5%]'>
              <input
                type='button'
                value='Log in'
                className='px-2 py-1 bg-red-400 w-[80%]  box-border font-semibold '
                onClick={submitHandler}
              />
              <ToastContainer />
            </div>
            <p>
              Don't have an account yet ? &nbsp;
              <Link to='/register' className='underline underline-offset-2'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
