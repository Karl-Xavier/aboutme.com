import React, { useState } from 'react'
import './comptStyle/Navbar.css'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import { useNavContext } from './ContextAPI'

const Navbar = () => {

    const { lightMode } = useNavContext()

  return (
    <nav >
        <ul className='hidden md:hidden lg:block m-0'>
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
        <Toggle/>
        <div className="lg:hidden">
            <SideNav/>
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