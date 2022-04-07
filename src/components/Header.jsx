import React from 'react'
import NavbarLoged from './Navbar/NavbarLoged'
import NavbarNotLoged from './Navbar/NavbarNotLoged'





const Header = () => {
  
let loged_in = sessionStorage.getItem('token')

  return (
    loged_in !== null ?
        <NavbarLoged />
      :
        <NavbarNotLoged />
  )
}

export default Header