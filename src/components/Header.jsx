import React from 'react'
import NavbarLoged from './Navbar/NavbarLoged'
import NavbarNotLoged from './Navbar/NavbarNotLoged'


const Header = (props) => {

  return (
    props.loged ?
        <NavbarLoged />
      :
        <NavbarNotLoged />
  )
}

export default Header