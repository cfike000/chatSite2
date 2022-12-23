import React, { useState } from "react"
import { auth, db } from "../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

const Send = ({ scroll }) => {
  const [input, setInput] = useState("")
  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === "") {
      return
    }
    const { uid, displayName, photoURL } = auth.currentUser
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
      photoURL,
    })
    setInput("")
    scroll.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <form
      className=" bg-slate-700 h-20 w-full flex items-center justify-around"
      onSubmit={sendMessage}
    >
      <input
        className="w-16 bg-slate-50 h-10 rounded-sm sm:w-[75%] sm:h-12 basis-3/4 outline-2 outline-blue-500 indent-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white rounded  w-12 text-[.8em]  h-10 sm:text-sm flex items-center sm:h-12 sm:w-16 justify-center "
      >
        Send
      </button>
    </form>
  )
}

export default Send

// <div className="  bg-slate-700 h-20 w-full flex items-center justify-between">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               type="text"
//               placeholder="Write something..."
//               className=" mx-2 w-16 bg-slate-50 rounded-sm sm:w-[75%] sm:h-10 basis-3/4 outline-2 outline-blue-500"
//             ></input>
//             <div className="flex items-center justify-around basis-1/4 h-full mr-2">
//               <form onSubmit={sendMessage}>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white rounded h-8 w-12 text-[.8em] sm:text-sm flex items-center sm:h-10 sm:w-16 justify-center "
//                 >
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
