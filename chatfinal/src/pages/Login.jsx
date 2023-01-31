import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import SignIn from "../components/SignIn"
import { auth } from "../firebase"
import { motion as m } from "framer-motion"
const Login = () => {
  const handleClick = () => {}

  const [loginDisabled, setLogin] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user === null) {
        setLogin(true)
      } else {
        setLogin(false)
      }
    })
    return () => unsubscribe()
  }, [])
  console.log(loginDisabled)
  const styles = {
    button: ` ${
      loginDisabled ? `opacity-[.5]` : null
    } bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded`,
  }

  return (
    <div className=" bg flex items-center justify-center absolute top-0 left-0 w-full h-full">
      <m.div
        initial={{ opacity: "0" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className=" container w-2/4  m-auto min-w-[18em] max-w-[25em] bg-slate-50 rounded mx-2"
      >
        {/* Intro Title */}
        <div className=" w-full flex items-baseline">
          <div
            className="text-lg mx-auto flex justify-center
        items-center bold my-4 font-bold"
          >
            <div onClick={handleClick}>Welcome To FireFly</div>
          </div>
        </div>
        <div className="w-full h- h-100 text-slate-600 text-center px-6 py-2 text-sm">
          Chat Application built by Carl Fike. Designed for practicability and
          reflexiveness across all devices. Sign in with Google below (email is
          a mock login at the moment).
        </div>
        <div className="flex flex-col">
          {/* Email */}
          <input
            className="rounded-sm border border-slate-200 placeholder:italic placeholder:text-slate-400 placeholder:text-sm focus:outline-none focus:border-sky-500 shadow-sm mx-6 my-2 px-2"
            placeholder="This is a mock email form..."
          ></input>
          <input
            type="password"
            id="password"
            className="rounded-sm border border-slate-200 placeholder:italic placeholder:text-slate-400 placeholder:text-sm focus:outline-none focus:border-sky-500 shadow-sm mx-6 px-2 my-2"
            placeholder="Mock password"
          />

          {/* <GoEyeClosed /> */}

          {/* Password */}

          {/* Sideways flex with Login and forgot password */}
          <div className="flex justify-center items-center my-4 space-x-8">
            <button className="text-slate-400 text-sm">Forgot Password?</button>

            <Link
              to="/home"
              className={styles.button}
              onClick={(event) => loginDisabled && event.preventDefault()}
            >
              Login
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center my-4">
          <SignIn />
        </div>
        {/* <LogOut /> */}
      </m.div>
    </div>
  )
}

export default Login
