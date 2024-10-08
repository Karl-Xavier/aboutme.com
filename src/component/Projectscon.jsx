import React, { useEffect, useState } from 'react'
import './comptStyle/Projectscon.css'
import 'bootstrap/dist/css/bootstrap.css'
import { PROD } from '../prod'
import { Link } from 'phosphor-react'
import { X } from 'phosphor-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projectscon({ setIsOpen, lightMode }) {
  useEffect(() => {
    AOS.init()
  }, [])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageTitle, setSelectedImageTitle] = useState('')

  const changeIsOpen = () => {
    setIsOpen(false)
  }

   const handleOpen=(cover, title)=>{
    setIsModalOpen(true)
    setSelectedImage(cover)
    setSelectedImageTitle(title)
   }
   const handleClose=()=>{
    setIsModalOpen(false)
   }
   const handleOverlayClick=(e)=>{
    if(e.target.classList.contains('overlay')){
      handleClose()
    }
   }

  return (
    <div className='container h-full' onClick={changeIsOpen}>
        <h3>My Projects .</h3>
        <div className="row">
          {PROD.map((pro) => {
            return(
              <div className="col-lg-3 col-md-6 project" key={pro.id}>
                <img src={pro.cover} className='img-fluid rounded pro' alt={pro.id} onClick={()=>handleOpen(pro.cover, pro.title)} lazy/>
                <div className="tags mt-2">
                  {pro.tag.map((tags, index) => {
                    return <li style={!lightMode ? styles.darkModeTag : styles.lightModeTag} key={index}>{tags}</li>
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
        {isModalOpen && (
          <div className='overlay' onClick={handleOverlayClick}>
            <div className="modall" data-aos='zoom-in' data-aos-duration='1000'>
              <div className="modall-head">
                <X 
                    role='button' 
                    className="close" 
                    size={28}  
                    onClick={handleClose}
                    weight='fill' 
                    color='#eee'
                />
              </div>
              <div className="modall-container">
                  {selectedImageTitle && (
                    <h2>{selectedImageTitle}</h2>
                  )}
                  {selectedImage && (
                    <img src={selectedImage} alt="Selected" />
                  )}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

const styles = {
  darkModeTag: {
    background: 'linear-gradient(#eee, #ddd)',
    color: '#000'
  },
  lightModeTag: {
    background: 'linear-gradient(#161414, #000000)',
    color: '#eee'
  }
}