import React from 'react'
import './comptStyle/Projectscon.css'
import 'bootstrap/dist/css/bootstrap.css'
import { PROD } from '../prod'
import { Link } from 'phosphor-react'

export default function Projectscon() {
  return (
    <div className='container h-full'>
        <h3>My Projects .</h3>
        <div className="row">
          {PROD.map((pro) => {
            return(
              <div className="col-lg-3 col-md-6 project" key={pro.id}>
                <img src={pro.cover} className='img-fluid rounded pro' alt={pro.id}/>
                <div className="tags mt-2">
                  {pro.tag.map((tags, index) => {
                    return <li key={index}>{tags}</li>
                  })}
                </div>
                <div className="explanation mt-2">
                  <h2 className='text-center'>{pro.title}</h2>
                  <p className='text-center'>{pro.description}</p>
                </div>
                <p className='linked'><Link size={25}/> <a href={pro.link} target='_blank'>{pro.title}</a></p>
              </div>
            )
          })}
        </div>
    </div>
  )
}