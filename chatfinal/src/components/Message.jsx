import React from "react"
import { auth } from "../firebase"
import moment from "moment"
import { UseSlide } from "../context/SlideContext"

const Message = ({ message }) => {
  const { isOpen } = UseSlide()

  const style = {
    main: `flex p-2 transition trans ${
      !isOpen ? `sm:pl-[12rem] pl-[6.2rem]` : null
    }`,
    nameTimeLeft: `flex flex-col items-start`,
    nameTimeRight: `flex flex-col items-end`,
    mainSent: `flex p-2 transition trans flex-row-reverse ${
      !isOpen ? `sm:pl-[12rem] pl-[6.2rem]` : null
    }`,
    mainRecieved: `flex p-2 transition trans ${
      !isOpen ? `sm:pl-[12rem] pl-[6.2rem]` : null
    }`,
    nameSent: `absolute top-[-1.5rem] right-8 flex items-center ${
      !isOpen ? `` : null
    }`,
    nameRecieved: ` absolute top-[-1.5rem] left-8 flex items-center justify-center flex-row-reverse transition trans ${
      !isOpen ? `left-[7.5rem] sm:left-[13rem]` : null
    }`,
    message: `flex items-center shadow-xl break-all mx-4 my-6 py-4 px-4 rounded-tl-[25px] rounded-tr-[25px]`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-[25px]`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-[25px]`,
    name: `text-bold text-sm`,
  }

  let timestamp = message.timestamp // the timestamp from the message object
  let date = new Date(timestamp * 1000) // create a date object from the timestamp
  let standardTime = date.toLocaleTimeString("en-US")
  console.log(standardTime.length)
  let finalTime =
    standardTime.length === 10
      ? standardTime.slice(0, 4) + " " + standardTime.slice(-2).toLowerCase()
      : standardTime.slice(0, 5) + " " + standardTime.slice(-2).toLowerCase()

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
  const nameTime =
    message.uid === auth.currentUser.uid
      ? `${style.nameTimeRight} `
      : `${style.nameTimeLeft} `
  const photo = message.photoURL

  return (
    <div className="relative mt-6">
      <div className={mainClass}>
        <div className={`${style.message} ${messageClass} relative`}>
          <div className="">{message.text}</div>
        </div>
      </div>
      <div className={`${nameClass} gap-2 `}>
        <div className={nameTime}>
          <div className={`${style.name}`}>{message.name}</div>
          <div className="text-slate-500 text-sm">{finalTime}</div>
        </div>
        <img className="sm:w-12 w-10 rounded-full" src={message.photoURL} />
      </div>
    </div>
  )
}

export default Message
