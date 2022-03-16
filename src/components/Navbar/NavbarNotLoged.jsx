import React from 'react'
import {Nav, NavBtn, NavBtnLink, NavMenu, NavLink} from './NavbarElements'
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../../pic/icon_1.svg'

const NavbarNotLoged = () => {
    return ( 
        <Nav >
        <NavLink to = '/' activeStyle >
        <img src ={icon} alt='Aquntant' height={80}/>
        </NavLink>
        <NavMenu >
        <NavLink to = '/about' activeStyle>About </NavLink> {/*page about how to use the app */}
        <NavLink to = '/contact' activeStyle>Contact {/*page to show contact options if there's any problem with the usage */} </NavLink> 
        <NavLink to = '/sign-up' activeStyle>Sign Up {/*page for registration*/} </NavLink> 
        </NavMenu> 
        <NavBtn >
        <NavBtnLink to = '/sign-in' >
        Sign In {/* page for signing in */}
        </NavBtnLink> 
        </NavBtn> 
        </Nav>

    )
}

export default NavbarNotLoged