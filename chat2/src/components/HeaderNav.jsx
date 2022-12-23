import React from "react"
import { HiHome } from "react-icons/hi"
import { BiMessageAdd } from "react-icons/bi"
import { FaUserFriends } from "react-icons/fa"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
const HeaderNav = () => {
  const { user, logOut } = UserAuth()
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="bg-slate-800 h-12 w-full flex items-center justify-between drop-shadow-lg">
      <div className=" text-white pl-4 ">
        Hello, {user?.displayName ? user.displayName : "Guest"}
      </div>

      {/* CLASSES ARE hidden sm:flex for name and
      
      flex items-baseline justify-between px-4 w-full sm:w-60 sm:pr-4
      for below (links)
       */}
      <div className="flex items-baseline justify-between px-4 w-32 sm:w-60 sm:pr-4">
        <Link to="/">
          <HiHome className="fill-white" size={24} />
        </Link>
        {/* <BiMessageAdd className="fill-white" size={24} />
        <FaUserFriends className="fill-white" size={24} /> */}
        <div onClick={handleSignOut}>
          <BiLogOut className="fill-white" size={24} />
        </div>
      </div>
    </div>
  )
}
//Home

//Create new Message

//add friend

//Logout
export default HeaderNav
