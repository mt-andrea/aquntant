import React from 'react'
import { Nav, NavLink, NavMenu } from '../Navbar/NavbarElements'


const About = () => {
  return (
    <Nav className='text-center justify-content-center'>
    <NavMenu>
  <NavLink to='/about/singup' activeStyle>1 Sign Up</NavLink>
  <NavLink to='/about/singin' activeStyle>2 Sign In</NavLink>
  <NavLink to='/about/aftersignin' activeStyle>3 After Sign In</NavLink>
  </NavMenu>
</Nav>

  )
}

export default About