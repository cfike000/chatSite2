import React from "react"
import { Routes, Route, useLocation, redirect } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"

import { AnimatePresence, motion } from "framer-motion"

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Login />
            </motion.div>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Home />
            </motion.div>
          }
        ></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
