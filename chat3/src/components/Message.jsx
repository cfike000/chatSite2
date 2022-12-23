import React from "react"
import { auth } from "../firebase"

import { UseSlide } from "../context/SlideContext"

const Message = ({ message }) => {
  const { isOpen } = UseSlide()

  const style = {
    main: `flex p-2 transition trans ${
      !isOpen ? `sm:pl-[12rem] pl-[6.2rem]` : null
    }`,
    mainSent: `flex p-2 transition trans flex-row-reverse ${
      !isOpen ? `sm:pl-[12rem] pl-[6.2rem]` : null
    }`,
    mainRecieved: `flex p-2 transition trans ${
      !isOpen ? `sm:pl-[12rem] pl-[6.2rem]` : null
    }`,
    nameSent: `top-[-2rem] flex space-x-2 ${!isOpen ? `` : null}`,
    nameRecieved: `absolute mb-[5rem] flex space-x-2 ${!isOpen ? `` : null}`,
    message: `flex items-center shadow-xl break-all m-6 py-8 px-6 rounded-tl-[25px] rounded-tr-[25px]`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-[25px]`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-[25px]`,
  }

  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent} `
      : `${style.received} `
  const mainClass =
    message.uid === auth.currentUser.uid
      ? `${style.mainSent} `
      : `${style.mainRecieved} `
  const nameClass =
    message.uid === auth.currentUser.uid
      ? `${style.nameSent} `
      : `${style.nameRecieved} `
  const photo = message.photoURL
  return (
    <div className={mainClass}>
      <div className={`${style.message} ${messageClass} relative`}>
        <div className="">{message.text}</div>
      </div>
    </div>
  )
}

export default Message
