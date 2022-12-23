import React from "react"
import GoogleButton from "react-google-button"
import { UserAuth } from "../context/AuthContext"

const SignIn = () => {
  const { googleSignIn } = UserAuth()
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  )
}

export default SignIn
