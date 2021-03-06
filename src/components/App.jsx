import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import New from './pages/New'
import UserSettings from './pages/UserSettings'
import Partners from './pages/Partners'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import SuccessfullReg from './pages/Successfull-Reg'
import Transactions from './pages/Transactions'
import { useState } from 'react'
import SinUp from './sub/about/SinUp'
import SinIn from './sub/about/SinIn'
import AfterSignIn from './sub/about/AfterSignIn'

const App = () => {
  const [userData, setUserData] = useState({
    token: ""
});


  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/transactions' element={<Transactions/>} />
      <Route path='/new' element={<New/>} />
      <Route path='/partners' element={<Partners/>} />
      <Route path='/settings' element={<UserSettings beallit={setUserData}/>} />
      <Route path='/' exact element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<SignIn beallit={setUserData}/>} />
      <Route path='/successfull-reg' element={<SuccessfullReg/>} />
      <Route path='/about' exact element={<About/>}/>
      <Route path='/about/singup' element={<SinUp/>}/>
  <Route path='/about/singin' element={<SinIn/>}/>
  <Route path='/about/aftersignin' element={<AfterSignIn/>}/>
    </Routes>
    <Footer/>
</Router>
    
  )
}

export default App