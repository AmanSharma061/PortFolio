import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register () {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    password: '',
    cpassword: ''
  })

  const handler = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const incomplete = () => {
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
  }

  const sender = async e => {
    e.preventDefault()

    if (
      !user.name ||
      !user.email ||
      !user.phone ||
      !user.profession ||
      !user.password ||
      !user.cpassword
    ) {
      incomplete()

      return
    }
    if (user.password !== user.cpassword) {
      toast.warn('Password and Confirm Password should be same !', {
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
    } else if (user.phone.length != 10) {
      toast.warn('Please enter a valid phone number !', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      return
    }

    try {
      const { name, email, phone, profession, password, cpassword } = user
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          profession,
          password,
          cpassword
        })
      })

      const responseData = await response.json()

      if (responseData.error === 'Email') {
        toast.warn('Email already exists !', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
        return
      } else if (responseData.error === 'Phone') {
        toast.warn('Mobile Number already exists !', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
        return
      } else {
        toast.success('Registered Successfully !', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })

        setUser({
          name: '',
          email: '',
          phone: '',
          profession: '',
          password: '',
          cpassword: ''
        })
        console.log('Registration Successful')
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className=' ss flex  items-center text-center '>
        <div className=' w-full  h-[90%] md:mt-[5%]  flex justify-center md:shadow-xl  cc'>
          <img
            src='./public/register.jpg'
            alt=''
            className=' border-0 '
            id='rimg'
          />

          <form
            method='POST'
            onSubmit={sender}
            className='w-[80vw] h-full gap-4  flex flex-col '
            id='fm'
          >
            <h1 className='font-bold text-3xl text-red-400 mt-3 '> Sign Up</h1>
            <div className='flex justify-center items-center text-center mt-2  '>
              <label htmlFor='name'>
                {' '}
                <i className='	fa fa-user relative left-3'></i>
              </label>
              <input
                onChange={handler}
                type='text'
                name='name'
                value={user.name}
                autoComplete='off'
                className='  outline-none px-4 w-[90%] '
                placeholder='Your Name'
              />
              <br />
            </div>

            <div className='flex justify-center items-center text-center'>
              <label htmlFor='email'>
                <i
                  className='fa fa-envelope relative left-3'
                  style={{ fontSize: '12px' }}
                ></i>
              </label>
              <input
                onChange={handler}
                type='text'
                name='email'
                value={user.email}
                autoComplete='off'
                className=' bg-transparent outline-none px-4 w-[90%] '
                placeholder='Your Email'
              />
              <br />
            </div>

            <div className='flex justify-center items-center text-center'>
              <label htmlFor='phone'>
                <i className='fa fa-phone relative left-3'></i>
              </label>
              <input
                onChange={handler}
                type='text'
                name='phone'
                value={user.phone}
                autoComplete='off'
                className=' outline-none px-4 w-[90%]'
                placeholder='Mobile Number'
              />
              <br />
            </div>

            <div className='flex justify-center items-center text-center'>
              <label htmlFor='profession'>
                <i
                  className='fa fa-vcard relative left-3'
                  style={{ fontSize: '12px' }}
                ></i>
              </label>
              <input
                onChange={handler}
                type='text'
                name='profession'
                value={user.profession}
                autoComplete='off'
                className=' outline-none px-4 w-[90%]'
                placeholder='Profession'
              />
              <br />
            </div>

            <div className='flex justify-center items-center text-center'>
              <label htmlFor='email'>
                <i className='fa fa-lock relative left-3'></i>
              </label>
              <input
                onChange={handler}
                type='password'
                name='password'
                value={user.password}
                autoComplete='off'
                className=' outline-none px-4 w-[90%]'
                placeholder='Password'
              />
              <br />
            </div>

            <div className='flex justify-center items-center text-center'>
              <label htmlFor='email'>
                <i className='fa fa-lock relative left-3'></i>
              </label>
              <input
                onChange={handler}
                type='password'
                name='cpassword'
                value={user.cpassword}
                autoComplete='off'
                className=' outline-none px-4 w-[90%]'
                placeholder='Confirm Password'
              />
              <br />
            </div>

            <input
              type='button'
              value='Register'
              className='px-2 py-1 bg-red-400 w-[80%] relative left-9 box-border'
              onClick={sender}
            />
            <ToastContainer />

            <p className='bottom-5 relative'>
              already registerd?{' '}
              <Link to='/login' className='underline underline-offset-2   '>
                {' '}
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
