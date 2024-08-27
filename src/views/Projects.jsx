import React from 'react'
import Projectscon from '../component/Projectscon'
import 'bootstrap/dist/css/bootstrap.css'

const Projects = ({ setIsOpen, lightMode }) => {
  return (
    <div className='container'>
      <Projectscon
        setIsOpen={setIsOpen}
        lightMode={lightMode}
      />
    </div>
  )
}

export default Projects