import React from "react"
import { auth } from "../firebase"

const style = {
  message: `flex items-center shadow-xl m-6 py-2 px-2 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
}

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`
  const photo = message.photoURL
  return (
    <div className="flex flex-col p-2">
      <div className={`${style.message} ${messageClass} relative`}>
        <div className="">{message.text}</div>
        <div className="absolute mb-[5rem] flex space-x-4">
          <img src={photo} alt="" className="rounded-full h-8" />
          <div className="  text-black">{message.name}</div>
        </div>
      </div>
    </div>
  )
}

export default Message
