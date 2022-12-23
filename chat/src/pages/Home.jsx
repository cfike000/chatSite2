import Send from "../components/Send"
import Message from "../components/Message"
import HeaderNav from "../components/HeaderNav"
import { IoIosArrowBack } from "react-icons/io"
import {
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  addDoc,
  collection,
} from "firebase/firestore"
import { motion as m } from "framer-motion"
import SideUser from "../components/SideUser"
import React, { useState, useEffect, useRef } from "react"
import { auth, db } from "../firebase"

const Home = () => {
  const [sideMenuOpen, setSideMenu] = useState(false)
  console.log(sideMenuOpen)
  const styles = {
    sideMenu: `relative bg-slate-200 w-48 h-border border-r-slate-500/[.15]  overflow-visible transition ease-in-out duration-[250ms] ${
      sideMenuOpen ? "translate-x-[-100%]" : null
    }`,
    chatMain: `bg-white w-full flex flex-col  transition ease-in-out`,
  }

  const [messages, setMessages] = useState([])
  const scroll = useRef()
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessages(messages)
    })
    return () => unsubscribe()
  }, [])

  return (
    <m.div
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-0 left-0 w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white w-[90%] max-w-[60rem] overflow-hidden rounded">
        <HeaderNav />
        <div className="flex flex-col">
          <div className="flex h-[22rem] sm:h-[36rem]">
            <div className={`${styles.sideMenu}`}>
              <SideUser />
              <SideUser />
              <SideUser />

              <SideUser />
              <div
                onClick={() => {
                  setSideMenu(!sideMenuOpen)
                }}
                className="absolute right-[-1.5rem] h-10 w-6 bg-slate-200 rounded-r-sm border-l-slate-500/[.15] flex items-center justify-center cursor-pointer "
              >
                <IoIosArrowBack />
              </div>
            </div>
            <div className={styles.chatMain}>
              <div className="overflow-auto">
                <div className="overflow-auto">
                  {/* Loop of Messages */}
                  {messages &&
                    messages.map((message) => (
                      <Message key={message.id} message={message} />
                    ))}
                </div>
                <div ref={scroll}></div>
              </div>
            </div>
          </div>
          <Send scroll={scroll} />
        </div>
      </div>
    </m.div>
  )
}

export default Home
