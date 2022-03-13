import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarLoged from './Navbar/NavbarLoged'
import NavbarNotLoged from './Navbar/NavbarNotLoged'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'

let loged_in=false

const Header = () => {
  return (
      loged_in?
      <Router>
      <NavbarLoged/>
      <Routes>
        <Route path='/' exact element={Home}/>
        <Route path='/about' element={About}/>
        <Route path='/contact' element={Contact}/>
        <Route path='/sign-up' element={SignUp}/>
        <Route path='/sign-in' element={SignIn}/>
      </Routes>
  </Router>
    :
    <Router>
        <NavbarNotLoged/>
        <Routes>
          <Route path='/' exact element={Home}/>
          <Route path='/about' element={About}/>
          <Route path='/contact' element={Contact}/>
          <Route path='/sign-up' element={SignUp}/>
          <Route path='/sign-in' element={SignIn}/>
        </Routes>
    </Router>
  )
}

export default Header