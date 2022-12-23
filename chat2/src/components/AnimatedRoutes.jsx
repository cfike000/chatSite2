import React from "react"
import { Routes, Route, useLocation, redirect } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"

import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
