import React, { useState } from 'react'
import './comptStyle/Navbar.css'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'

const Navbar = ({ isOpen, toggleDrawer, setIsOpen, lightMode, toggleBackground }) => {

  return (
    <nav>
        <ul className='hidden md:hidden lg:block'>
            <li>
                <Link style={!lightMode ? styles.darkLink : styles.lightLink} className='aa' to='/'>Home</Link>
            </li>
            <li>
                <Link style={!lightMode ? styles.darkLink : styles.lightLink} className='aa' to='/projects'>Projects</Link>
            </li>
            <li>
            <Link style={!lightMode ? styles.darkLink : styles.lightLink} className='aa' to='/contact'>ContactMe</Link>
            </li>
        </ul>
        <Toggle
            lightMode={lightMode}
            toggleBackground={toggleBackground}
        />
        <div className="lg:hidden">
            <SideNav
                isOpen={isOpen}
                showSideNav={toggleDrawer}
                setIsOpen={setIsOpen}
                lightMode={lightMode}
            />
        </div>
    </nav>
  )
}
export default Navbar

const styles = {
    darkLink: {
        color: '#eee'
    },
    lightLink: {
        color: '#161414'
    }
}