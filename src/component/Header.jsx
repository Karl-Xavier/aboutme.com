import React from 'react'
import Navbar from './Navbar'
import './comptStyle/Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

const Header = ({ isOpen, toggleDrawer, setIsOpen }) => {

  return (
    <header className='container'>
        <Link className='alink' to='/'>
            <h1>CodeFolio</h1>
        </Link>
        <Navbar
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          setIsOpen={setIsOpen}
        />
    </header>
  )
}

export default Header