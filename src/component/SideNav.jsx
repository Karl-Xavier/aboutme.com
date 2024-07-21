import React, { useState } from 'react'
import { House, List, ProjectorScreen, User, X } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './comptStyle/SideNav.css'

const SideNav = ({ isOpen, showSideNav, setIsOpen }) => {

  function onClearNav(){
    setIsOpen(false)
  }

  return (
    <div>
        <button className='toggle' onClick={showSideNav}>
            {!isOpen ? <List size={32} /> : <X size={32}/>}
        </button>
        <div className={`sidenav ${isOpen && 'open'}`}>
        <ul>
          <li onClick={onClearNav}><Link className='a' to={'/'}>Home <House size={28} weight='fill'/></Link></li>
          <li onClick={onClearNav}><Link className='a' to={'/projects'}>Project <ProjectorScreen size={28} weight='fill'/></Link></li>
          <li onClick={onClearNav}><Link className='a' to={'/contact'}>Contact <User size={28} weight='fill'/></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav