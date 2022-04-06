import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import New from './pages/New'
import Order from './pages/Order'
import Partners from './pages/Partners'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import SuccessfullReg from './pages/Successfull-Reg'
import Transactions from './pages/Transactions'

const App = () => {
  return (
    <Router>
    <Header loged={false} />
    <Routes>
      <Route path='/transactions' exact element={<Transactions/>} />
      <Route path='/new' element={<New/>} />
      <Route path='/partners' element={<Partners/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/' exact element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/successfull-reg' element={<SuccessfullReg/>} />
    </Routes>
    <Footer/>
</Router>
    
  )
}

export default App