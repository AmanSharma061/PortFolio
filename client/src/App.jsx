import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes
} from 'react-router-dom'

import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

import Error from './components/Error'
import { useEffect, useContext } from 'react'


function App () {
  const N = () => {
    return <Navbar />
  }
  useEffect(() => {
    N()
  }, [])

  return (
    <>
      <Router>
        <N />

        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/register' element={<Register />} /> */}
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/login' element={<Login />} /> */}
          {/* <Route path='/logout' element={<Logout />} /> */}

          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
