import React from 'react'
import { NavLink } from 'react-router-dom'
import { Bars, Nav, NavBtn, NavBtnLink, NavMenu } from './NavbarElements'

const NavbarNotLoged = () => {
    return ( 
        <Nav >
        <NavLink to = '/' activeStyle >
        <img src ={require('../../pic/icon_1.svg')} alt='Aquntant'/>
        </NavLink> <Bars />
        <NavMenu >
        <NavLink to = '/about' activeStyle>About { /*page about how to use the app */ } </NavLink> 
        <NavLink to = '/contact' activeStyle>Contact { /*page to show contact options if there's any problem with the usage */ } </NavLink> 
        <NavLink to = '/sign-up' activeStyle>Sign Up { /*page for registration*/ } </NavLink> 
        </NavMenu> 
        <NavBtn >
        <NavBtnLink to = '/sign-in' >
        Sign In { /*page for signing in*/ } 
        </NavBtnLink> 
        </NavBtn> 
        </Nav>
    )
}

export default NavbarNotLoged