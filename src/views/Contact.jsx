import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ContactContetnt from '../component/ContactContetnt'

const Contact = ({ setIsOpen }) => {
  return (
    <div className='container w-full'>
      <ContactContetnt
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default Contact