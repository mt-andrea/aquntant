import React from 'react'
import { NavLink } from 'react-router-dom'
import { Bars, Nav, NavBtn, NavBtnLink, NavMenu } from './NavbarElements'

const Navbar = () => {
    return ( 
        <Nav >
        <NavLink to = '/' activeStyle >
        <img src = '../../pic/icon_1.svg' />
        </NavLink> <Bars />
        <NavMenu >
        <NavLink to = '/about' >About { /*page about how to use the app */ } </NavLink> 
        <NavLink to = '/contact' >Contact { /*page to show contact options if there's any problem with the usage */ } </NavLink> 
        <NavLink to = '/sign-up' >Sign Up { /*page for registration*/ } </NavLink> 
        </NavMenu> 
        <NavBtn >
        <NavBtnLink to = '/sign-in' >
        Sign In { /*page for signing in*/ } 
        </NavBtnLink> 
        </NavBtn> 
        </Nav>
    )
}

export default Navbar