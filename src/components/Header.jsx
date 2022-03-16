import React from 'react'
import NavbarLoged from './Navbar/NavbarLoged'
import NavbarNotLoged from './Navbar/NavbarNotLoged'


let loged_in = false

const Header = () => {
  return (
    loged_in ?
        <NavbarLoged />
      :
        <NavbarNotLoged />
  )
}

export default Header