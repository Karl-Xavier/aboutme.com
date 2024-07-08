import React from 'react'
import './comptStyle/Navbar.css'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='hidden md:hidden lg:block'>
            <li>
                <Link className='aa' to='/'>Home</Link>
            </li>
            <li>
                <Link className='aa' to='/projects'>Projects</Link>
            </li>
            <li>
            <Link className='aa' to='/contact'>ContactMe</Link>
            </li>
        </ul>
        <div className="lg:hidden">
            <SideNav/>
        </div>
    </nav>
  )
}

export default Navbar