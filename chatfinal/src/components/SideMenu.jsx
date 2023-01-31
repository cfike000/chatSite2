import React from "react"
import SideUser from "./SideUser"
import { IoIosArrowBack } from "react-icons/io"
import { SlideContext, UseSlide } from "../context/SlideContext"
import { useContext } from "react"
import { names } from "../mockNames"
const SideMenu = () => {
  const { isOpen, setIsOpen } = UseSlide()

  const styles = {
    sideMenu: `absolute bg-slate-200 w-24 sm:w-48 border-r-slate-500/[.15] h-full 
    
    transition duration-200 ease-in-out ${
      isOpen ? `translate-x-[-100%]` : null
    }`,
    arrow: `translong ${isOpen ? `rotate-180` : null}`,
  }

  return (
    <div className={styles.sideMenu}>
      <div
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        className="absolute right-[-1.5rem] centered h-10 w-6 bg-slate-200 rounded-r-sm flex items-center justify-center cursor-pointer"
      >
        <IoIosArrowBack className={styles.arrow} />
        {/* <div className="absolute h-full w-full">
          <div className="shine absolute"></div>
        </div> */}
      </div>

      <div className="h-full overflow-y-auto overflow-x-hidden">
        {names.map((name) => (
          <SideUser name={name} />
        ))}
      </div>
    </div>
  )
}

export default SideMenu
