import React from "react"
import Icon from "../assets/imgs/icon.png"
import { UseSlide } from "../context/SlideContext"

const SideUser = (props) => {
  const { isOpen } = UseSlide()

  const styles = {
    name: `text-[.6em] font-bold `,
  }
  const name = props.name
  const getName = (name) => {
    const first = name.split(" ")[0]
    const last = name.split(" ")[1].split("")[0].toUpperCase() + "."
    return `${first} ${last}`
  }

  return (
    <div className="flex items-center h-20 border border-b-slate-500/[.15]">
      <div className="  flex justify-center items-center h-full w-full">
        <div className=" h-full w-[40%] flex items-center justify-start">
          <div className=" bg-white h-8 w-8  rounded-full"></div>
        </div>
        <div className={styles.name}>{getName(name)}</div>{" "}
      </div>
    </div>
  )
}

export default SideUser
