import React from 'react'
import './comptStyle/Content.css'
import { ChartBar } from 'phosphor-react'

export default function SkillChart() {
  return (
    <div className="container skills py-4 select-none" data-aos='zoom-in' data-aos-duration='2000'>
      <h2 className='flex flex-row justify-between items-center text-[16px]'>Skill Chart <ChartBar weight='fill' size={30}/></h2>
        <div className="progress my-3">
            <div className="pro-value2">
              <p className="px-3">Tailwind<span className="text-black float-right">85%</span></p>
            </div>
          </div>
          <div className="progress">
            <div className="pro-value3">
              <p className="px-3">JavaScript & JQuery <span className="text-black float-right">80%</span></p>
            </div>
          </div>
          <div className="progress my-3">
            <div className="pro-value4">
              <p className="px-3">React & NextJS <span className="text-black float-right">80%</span></p>
            </div>
          </div>
          <div className="progress my-3">
            <div className="pro-value5">
              <p className="px-3">Node & Express <span className="text-black float-right">80%</span></p>
            </div>
          </div>
          <div className="progress my-3">
            <div className="pro-value6">
              <p className="px-3">Database <span className="text-black float-right">70%</span></p>
            </div>
          </div>
        <div className="progress">
            <div className="pro-value1">
              <p className="px-3">Github & Git<span className="text-black float-right">90%</span></p>
            </div>
        </div>
    </div>
  )
}