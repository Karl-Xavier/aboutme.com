import React, { useEffect, useState } from 'react'
import { projects } from '../prod'
import { useParams } from 'react-router-dom'
import '../component/comptStyle/projid.css'
import Carousel from '../component/Carousel'

export default function ProjId() {

  const { id } = useParams()
  //const router = useN
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  console.log(projects)

  useEffect(() => {

    const projectData = projects.find(proj => proj.id === Number(id))

    if(projectData){
      setProject(projectData)

      console.log(projectData)

      setLoading(false)
    }else {
      setLoading(false)

      console.log(projectData, id)
    }

  },[projects])

  if(loading){
    <p>Loading....</p>
  }

  return (
    <div className='project-description w-full h-auto px-[7%] py-[20px]'>
      <div className="links">
        {project.link.map((links, index) => (
          <p key={index} className='flex flex-row justify-start items-center gap-[4px]'><span>{links.icon}</span> <span className='font-bold'>{links.name}:-</span> <a href={links.link} target='_blank'>{links.link}</a></p>
        ))}
      </div>
      <img src={project.cover} alt={project.title} className='md:h-[500px] w-full mb-[20px]'/>
      <div className="description" dangerouslySetInnerHTML={{ __html: project.description }}></div>
      <Carousel data={project.otherImages}/>
    </div>
  )
}