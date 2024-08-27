import React, { useState } from 'react'
import { House, List, ProjectorScreen, User, X } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './comptStyle/SideNav.css'

const SideNav = ({ isOpen, showSideNav, setIsOpen, lightMode }) => {

  function onClearNav(){
    setIsOpen(false)
  }

  return (
    <div>
        <button className='toggle' onClick={showSideNav}>
            {!isOpen ? <List size={32} /> : <X size={32}/>}
        </button>
        <div style={!lightMode ? styles.darkMode : styles.lightMode} className={`sidenav ${isOpen && 'open'}`}>
        <ul>
          <li onClick={onClearNav}><Link style={!lightMode ? styles.dark : styles.alight} className='a' to={'/'}>Home <House size={28} weight='fill'/></Link></li>
          <li onClick={onClearNav}><Link style={!lightMode ? styles.dark : styles.alight} className='a' to={'/projects'}>Project <ProjectorScreen size={28} weight='fill'/></Link></li>
          <li onClick={onClearNav}><Link style={!lightMode ? styles.dark : styles.alight} className='a' to={'/contact'}>Contact <User size={28} weight='fill'/></Link></li>
        </ul>
      </div>
    </div>
  )
}
export default SideNav

const styles = {
  darkMode: {
    backgroundColor: '#111'
  },
  lightMode: {
    backgroundColor: '#eee'
  },
  alight: {
    color: '#111'
  },
  dark: {
    color: '#eee'
  }
}