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
        <NavLink to = '/new' activeStyle>New Transaction { /*page to add a new trasaction */ } </NavLink> 
        <NavLink to = '/partners' activeStyle>Partners { /*page to show the list of partners the user has*/ } </NavLink> 
        </NavMenu> 
        <NavBtn >
        <NavBtnLink to = '/order' >
        Order { /*page for ordering from partners*/ } 
        </NavBtnLink> 
        </NavBtn> 
        </Nav>
    )
}

export default NavbarLoged