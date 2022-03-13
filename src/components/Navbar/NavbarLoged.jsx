import React from 'react'
import { NavLink } from 'react-router-dom'
import { Bars, Nav, NavBtn, NavBtnLink, NavMenu } from './NavbarElements'

const NavbarLoged = () => {
    return ( 
        <Nav >
        <NavLink to = '/' activeStyle >
        <img src ={require('../../pic/icon_1.svg')} alt='Aquntant'/>
        </NavLink> <Bars />
        <NavMenu >
        <NavLink to = '/about' activeStyle>About { /*page about how to use the app */ } </NavLink> 
        <NavLink to = '/contact' activeStyle>Contact { /*page to show contact options if there's any problem with the usage */ } </NavLink> 
        </NavMenu> 
        <NavBtn >
        <NavBtnLink to = '/order' >
        Request { /*page for requests*/ } 
        </NavBtnLink> 
        </NavBtn> 
        </Nav>
    )
}

export default NavbarLoged