import React from 'react'
import Navbar from './Navbar'
import './comptStyle/Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

const Header = ({ isOpen, toggleDrawer, setIsOpen, lightMode, toggleBackground }) => {

  return (
    <header className='container'>
        <Link style={!lightMode ? styles.alink : styles.aLightMode} to='/'>
            <h1>CodeFolio</h1>
        </Link>
        <Navbar
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          setIsOpen={setIsOpen}
          lightMode={lightMode}
          toggleBackground={toggleBackground}
        />
    </header>
  )
}
export default Header

const styles = {
  alink: {
    textDecoration: 'none',
    color: '#eee',
  },
  aLightMode: {
    textDecoration: 'none',
    color: '#161414'
  }
}