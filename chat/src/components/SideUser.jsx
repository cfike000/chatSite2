import React from "react"
import Icon from "../assets/imgs/icon.png"
const SideUser = () => {
  return (
    <div className="flex items-center p-2 justify-start w-full border border-b-slate-500/[.15]">
      <div className=" bg-white h-8 w-8 rounded-full px-4"></div>
      <div className="flex flex-col justify-center ml-4 h-12 w-20">
        <div className=" text-[.6em] font-bold pr-2">Jim F.</div>
        <div className="text-[.6rem] text w-16 pr-2 text-slate-500">
          what about thusrday?
        </div>
      </div>
    </div>
  )
}

export default SideUser
