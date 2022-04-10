import React from 'react'
import { Nav, NavBtn, NavBtnLink, NavMenu, NavLink } from './NavbarElements'
import icon from '../../pic/icon_1.svg'

const NavbarLoged = () => {
    return (
        <Nav >
            <NavLink to='/transactions' activeStyle >
                <img src={icon} alt='Aquntant' height={80} />
            </NavLink>
            <NavMenu >
                <NavLink to='/new' activeStyle>New Transaction { /*page to add a new trasaction */}
                </NavLink>
                <NavLink to='/partners' activeStyle>Partners { /*page to show the list of partners the user has*/}
                </NavLink>
            </NavMenu>
            <NavBtn >
                <NavBtnLink to='/settings' >
                    Settings { /*page for modifying email, pass etc.*/}
                </NavBtnLink>
            </NavBtn>
        </Nav>
    )
}

export default NavbarLoged