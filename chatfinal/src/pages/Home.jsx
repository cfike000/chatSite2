import Send from "../components/Send"
import Message from "../components/Message"
import HeaderNav from "../components/HeaderNav"
import SideMenu from "../components/SideMenu"
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
  const styles = {
    chatMain: `bg-white w-full flex flex-col relative`,
    //add toggle to condition to fix
    mainContainer: ` flex h-[22rem] sm:h-[42rem]`,
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
    <div className="bg absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <m.div className="bg-white w-[90%] max-w-[60rem] overflow-hidden rounded">
        <HeaderNav />
        <div className="flex flex-col">
          <div className={styles.mainContainer}>
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
              <SideMenu />
            </div>
          </div>
          <Send scroll={scroll} />
        </div>
      </m.div>
    </div>
  )
}

export default Home
