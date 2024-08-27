import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ContactContetnt from '../component/ContactContetnt'

const Contact = ({ setIsOpen, lightMode }) => {
  return (
    <div className='container w-full'>
      <ContactContetnt
        setIsOpen={setIsOpen}
        lightMode={lightMode}
      />
    </div>
  )
}

export default Contact