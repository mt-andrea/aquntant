import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarLoged from './Navbar/NavbarLoged'
import NavbarNotLoged from './Navbar/NavbarNotLoged'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import New from './pages/New'
import Order from './pages/Order'
import Partners from './pages/Partners'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import Transactions from './pages/Transactions'

let loged_in = true

const Header = () => {
  return (
    loged_in ?
      <Router>
        <NavbarLoged />
        <Routes>
          <Route path='/' exact element={Transactions} />
          <Route path='/new' element={New} />
          <Route path='/partners' element={Partners} />
          <Route path='/order' element={Order} />
        </Routes>
      </Router>
      :
      <Router>
        <NavbarNotLoged />
        <Routes>
          <Route path='/' exact element={Home} />
          <Route path='/about' element={About} />
          <Route path='/contact' element={Contact} />
          <Route path='/sign-up' element={SignUp} />
          <Route path='/sign-in' element={SignIn} />
        </Routes>
      </Router>
  )
}

export default Header