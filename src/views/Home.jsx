import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Content from '../component/Content'

const Home = ({ setIsOpen, lightMode }) => {
  return (
    <div className='container h-full'>
        <Content
          setIsOpen={setIsOpen}
          lightMode={lightMode}
        />
    </div>
  )
}

export default Home