import React from 'react'
import './comptStyle/Projectscon.css'
import { projects } from '../prod'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'phosphor-react'
import { useNavContext } from './ContextAPI'

export default function Projectscon() {

  const { lightMode } = useNavContext()

  return (
    <div className='project-container container'>
      <h2 className="text-[18px] font-bold">MY PROJECTS</h2>
      <ul className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
        {projects.map((project, index) => (
          <li key={index} id={project.id} className='mb-[75px]'>
            <img src={project.cover} alt={project.title} className='cover'/>
            <div className={`tech ${lightMode ? 'bg-[#f5f5f5]' : 'bg-[#242424]'}`}>
              <h2 className='text-[18px]'>{project.title}</h2>
              <h3>Stack:</h3>
              <div className="tech-img">
                {project.tag.map((logo, index) => (
                  <img src={logo} alt={index} className='w-[20px] h-[20px] md:w-[30px] md:h-[30px]'/>
                ))}
              </div>
              <Link to={`/projects/${project.id}`}><span>Read Full</span> <span><ArrowRight weight='bold' size={20}/></span></Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}