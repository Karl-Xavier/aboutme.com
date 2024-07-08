import React, { useEffect } from 'react'
import './comptStyle/Content.css'
import 'bootstrap/dist/css/bootstrap.css'
import Emeka from '../assets/88774833fhn_034822.png'
import { ChartBar } from 'phosphor-react'
import CircularChart from './CircularChart'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Content = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='container'>
      <div className='row'>
          <div className="col-lg-5" data-aos='zoom-in' data-aos-duration='2000'>
              <img className='img-fluid rounded pic' src={Emeka}/>
          </div>
          <div className="col-lg-7" data-aos='zoom-in' data-aos-duration='2000'>
              <div className='about'>
                  <h2>About Me.</h2>
                  <p className='mee'>Web Developer</p>
                  <div className="me">
                    <p>
                      My Name is Emeka Bruno, I am a Web Developer who specializes in UI/UX Design, Web Design and Web devlopment.I have learnt FrontEnd Skills and libaries like HTML5, CSS3, Bootstrap, JavaScript, JQuery React, Redux, Backend Skills and Framework like Nodejs and Express. I also know Authentication and Database(Firebase for Authentication and Realtime Database).
                    </p>
                  </div>
              </div>
              <div className='flex flex-row items-center'>
                <CircularChart percentage={82}/>
                <h3 className='ml-3'>Frontend Development</h3>
              </div>
              <div className='flex flex-row items-center'>
                <CircularChart percentage={55}/>
                <h3 className='ml-3'>Backend Development</h3>
              </div>
              <div className='flex flex-row items-center'>
                <CircularChart percentage={60}/>
                <h3 className='ml-3'>Database</h3>
              </div>
          </div>
      </div>
      <div className="container skills py-4 select-none" data-aos='zoom-in' data-aos-duration='2000'>
        <h2 className='flex flex-row justify-between items-center md:w-1/4'>Skill Chart <ChartBar weight='fill' size={30}/></h2>
          <div className="progress">
              <div className="pro-value1">
                <p className="px-3">HTML \ CSS <span className="text-black float-right">90%</span></p>
              </div>
          </div>
          <div className="progress my-4">
              <div className="pro-value2">
                <p className="px-3">Bootstrap<span className="text-black float-right">65%</span></p>
              </div>
            </div>
            <div className="progress">
              <div className="pro-value3">
                <p className="px-3">JavaScript \ JQuery <span className="text-black float-right">80%</span></p>
              </div>
            </div>
            <div className="progress my-4">
              <div className="pro-value4">
                <p className="px-3">React <span className="text-black float-right">70%</span></p>
              </div>
            </div>
            <div className="progress my-4">
              <div className="pro-value5">
                <p className="px-3">Nodejs \ Express.js <span className="text-black float-right">55%</span></p>
              </div>
            </div>
            <div className="progress my-4">
              <div className="pro-value6">
                <p className="px-3">Firebase <span className="text-black float-right">60%</span></p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Content