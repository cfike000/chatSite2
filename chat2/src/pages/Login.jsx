import LogOut from "../components/Logout"
import { Link } from "react-router-dom"
import React from "react"
import SignIn from "../components/SignIn"
import { motion } from "framer-motion"

const Login = () => {
  return (
    <motion.div
      className=" bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <div className=" container w-2/4  m-auto min-w-[18em] max-w-[25em] bg-slate-50 rounded mx-2">
        {/* Intro Title */}
        <div className=" w-full flex items-baseline">
          <div
            className="text-lg mx-auto flex justify-center
        items-center bold my-4 font-bold"
          >
            <div>Welcome To FireFly</div>
          </div>
        </div>
        <div className="w-full h- h-100 text-slate-600 text-center px-6 py-2 text-sm">
          A discrete and privacy-centered chat application intent on providing
          fast and scalable user experiences.
        </div>
        <div className="flex flex-col">
          {/* Email */}
          <input
            className="rounded-sm border border-slate-200 placeholder:italic placeholder:text-slate-400 placeholder:text-sm focus:outline-none focus:border-sky-500 shadow-sm mx-6 my-2 px-2"
            placeholder="Enter your email"
          ></input>
          <input
            type="password"
            id="password"
            className="rounded-sm border border-slate-200 placeholder:italic placeholder:text-slate-400 placeholder:text-sm focus:outline-none focus:border-sky-500 shadow-sm mx-6 px-2 my-2"
            placeholder="Enter your password"
          />

          {/* <GoEyeClosed /> */}

          {/* Password */}

          {/* Sideways flex with Login and forgot password */}
          <div className="flex justify-center items-center my-4 space-x-8">
            <button className="text-slate-400 text-sm" onClick={() => {}}>
              Forgot Password?
            </button>
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              to="/home"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center my-4">
          <SignIn />
        </div>
        {/* <LogOut /> */}
      </div>
    </motion.div>
  )
}

export default Login
