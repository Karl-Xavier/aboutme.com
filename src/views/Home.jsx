import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Content from '../component/Content'

const Home = ({ isOpen, setIsOpen }) => {
  return (
    <div className='container h-full'>
        <Content
          setIsOpen={setIsOpen}
        />
    </div>
  )
}

export default Home