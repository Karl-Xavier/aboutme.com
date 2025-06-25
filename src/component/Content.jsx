import React, { useEffect, useState } from 'react'
import './comptStyle/Content.css'
import 'bootstrap/dist/css/bootstrap.css'
import Emeka from '../assets/88774833fhn_034822.png'
import responsive from '../assets/responsive.png'
import algorithm from '../assets/algorithm.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavContext } from './ContextAPI'
import SkillChart from './SkillChart'
import { GraduationCap } from 'phosphor-react'

const Content = () => {

  const { setIsOpen, lightMode } = useNavContext()

  useEffect(() => {
    AOS.init()
  }, [])

  function changeIsOpen(){
    setIsOpen(false)
  }

  return (
    <div className='container h-auto' onClick={changeIsOpen}>
      <div className='row'>
          <div className="col-lg-5" data-aos='zoom-in' data-aos-duration='2000'>
              <img className='img-fluid rounded pic' src={Emeka}/>
          </div>
          <div className="col-lg-7" data-aos='zoom-in' data-aos-duration='2000'>
              <div className='about'>
                  <h2 className='text-[18px] mt-2 lg:mt-0'>ABOUTME.</h2>
                  <p style={!lightMode ? styles.darkJob : styles.lightJob} className='mee text-[16px]'>FULLSTACK DEVELOPER</p>
                  <div className="me">
                    <p>
                      My Name is Nnaemeka Uwasomba Joshua, I am a Fullstack MERN developer who specializes in building scalable fullstack applications. I have hands on experience using technologies like React and NextJs to build scalable frontend applications. I use Tailwind CSS as a css library for quick stylings. I also build backend servers and make API routes using NodeJS, Express and Typescript for type safety. I Utilize Redis for caching data for faster load time and MongoDB as database to store data. I have worked on Many Project but i choose to show my best Projects.
                    </p>
                    <div className="cv">
                    <a style={!lightMode ? styles.darkLink : styles.lightLink} href={`${process.env.PUBLIC_URL}/EmekaResume.pdf`} download='EmekaResume.pdf'><button style={!lightMode ? styles.darkButton : styles.lightButton}>Download CV</button></a>
                    </div>
                  </div>
                  <SkillChart/>
              </div>
          </div>
      </div>
      <div className="certifications my-4">
        <h2 className='my-4 text-[16px] flex flex-row justify-start items-center gap-2'>Certificates <GraduationCap weight='fill' size={22}/></h2>
        <div className="row">
          <div className="col-lg-6">
          <img src={responsive} alt="Certificates" />
          </div>
          <div className="col-lg-6">
          <img src={algorithm} alt="Certificates 2" />
          </div>
        </div>
      </div>
     
    </div>
  )
}
export default Content

const styles = {
  darkLink: {
    textDecoration: 'none',
    color: '#161414'
  },
  lightLink: {
    textDecoration: 'none',
    color: '#eee'
  },
  darkButton: {
    background: 'linear-gradient(270deg, #eee, #d5d5d5)'
  },
  lightButton: {
    background: 'linear-gradient(270deg, #161414, #000000)'
  },
  darkJob: {
    color: 'lightgray'
  },
  lightJob: {
    color: '#555'
  },
  smallScreen: {
    display: 'none'
  },
  largeScreen: {
    display: 'none'
  }
}