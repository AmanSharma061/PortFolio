import React from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useRef } from 'react'
import emailjs, { send } from '@emailjs/browser'

function Contact () {
  const [querry, setQuerry] = React.useState({
    from_name: '',
    from_email: '',
    from_phone: '',
    message: ''
  })
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()
    if (
      !querry.from_name ||
      !querry.from_email ||
      !querry.from_phone ||
      !querry.message
    ) {
      toast.warn('Please fill all the fields.', {
        position: toast.POSITION.TOP_CENTER
      })
      return
    } else if (querry.from_phone.length != 10) {
      toast.warn('Please enter a valid phone number', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      })

      return
    } else {
      emailjs
        .sendForm(
          'service_5m1qvqb',
          'template_3o24wpu',
          form.current,
          'oHuWV0h35ILurhduo'
        )
        .then(
          result => {
            toast.success('Message Sent Successfully', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000
            })
            console.log(result.text)
            setQuerry({
              from_name: '',
              from_email: '',
              from_phone: '',
              message: ''
            })
            
          },
          error => {
            console.log(error.text)
          }
        )
    }
  }
  const handler = event => {
    setQuerry({ ...querry, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className=' sm:w-[65%] mx-auto flex  items-center text-center sm:mt-[2%] '>
        <div className=' w-[100%] mt-[5vh]  flex justify-center shadow-xl cc'>
          <img
            src='./public/contact.png'
            alt=''
            className='w-[50%] h-[60vh] my-auto '
            id='contact'
          />

          <form
            onSubmit={sendEmail}
            ref={form}
            className='w-[100%] h-full gap-4  flex flex-col  my-16'
            id='fm'
          >
            <h1 className='  font-bold text-3xl relative top-[-6vh] text-red-400 '>
              {' '}
              Get in Touch
            </h1>

            <div className='flex justify-center items-center text-center'>
              <label htmlFor='Name'>
                {' '}
                <i
                  className='fa fa-user relative left-3'
                  style={{ fontSize: '12px' }}
                ></i>
              </label>
              <input
                type='text'
                name='from_name'
                value={querry.from_name}
                onChange={handler}
                autoComplete='off'
                className=' bg-transparent outline-none px-4 w-[90%] '
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
                type='email'
                name='from_email'
                value={querry.from_email}
                onChange={handler}
                className=' outline-none px-4 w-[90%]'
                placeholder='Your Email'
              />
              <br />
            </div>
            <div className='flex justify-center items-center text-center'>
              <label htmlFor='email'>
                <i
                  className='fa fa-phone relative left-3'
                  style={{ fontSize: '12px' }}
                ></i>
              </label>
              <input
                type='Number'
                name='from_phone'
                value={querry.from_phone}
                onChange={handler}
                className=' outline-none px-4 w-[90%]'
                placeholder='Mobile Number'
              />
              <br />
            </div>
            <div className='flex justify-center items-center text-center'>
              <textarea
                type=''
                name='message'
                value={querry.message}
                onChange={handler}
                rows={5}
                className=' border-2 rounded-sm  px-2 w-[90%]'
                placeholder='Message Here'
              />
              <br />
            </div>

            <div className='flex justify-center items-center text-center'>
              <input
                type='button'
                value='Submit'
                className='px-2 py-1 bg-red-400 w-[90%]   box-border font-semibold '
                onClick={sendEmail}
              />
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
