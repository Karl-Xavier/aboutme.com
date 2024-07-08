import React from 'react'
import Navbar from './Navbar'
import './comptStyle/Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container'>
        <Link className='alink' to='/'>
            <h1>CodeFolio</h1>
        </Link>
        <Navbar/>
    </header>
  )
}

export default Header