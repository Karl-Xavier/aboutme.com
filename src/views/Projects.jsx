import React from 'react'
import Projectscon from '../component/Projectscon'
import 'bootstrap/dist/css/bootstrap.css'

const Projects = ({ setIsOpen }) => {
  return (
    <div className='container'>
      <Projectscon
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default Projects