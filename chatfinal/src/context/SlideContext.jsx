import { useContext, createContext, useState, useEffect } from "react"

export const SlideContext = createContext()

export const SlideContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SlideContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SlideContext.Provider>
  )
}

export const UseSlide = () => {
  return useContext(SlideContext)
}
