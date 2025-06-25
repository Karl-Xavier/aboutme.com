import React from 'react'
import Navbar from './Navbar'
import './comptStyle/Header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import { useNavContext } from './ContextAPI'

const Header = () => {

  const { lightMode } = useNavContext()

  return (
    <header className='container'>
        <Link style={!lightMode ? styles.alink : styles.aLightMode} to='/'>
            <h1>CodeFolio</h1>
        </Link>
        <Navbar/>
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