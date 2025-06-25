import React, { useState, createContext, useContext } from "react";

const NavContext = createContext()

export const useNavContext = () => useContext(NavContext)

export const NavProvider = ({ children }) => {

  const [lightMode, setLightMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  function toggleBackground(){
    setLightMode(!lightMode)
  }

  function toggleDrawer(){
    setIsOpen(!isOpen)
  }

 return (
  <NavContext.Provider value={{ lightMode, isOpen, setIsOpen, toggleBackground, toggleDrawer }}>
   {children}
  </NavContext.Provider>
 )

}