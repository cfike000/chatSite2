import AnimatedRoutes from "./components/AnimatedRoutes"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <AnimatedRoutes />
      </AuthContextProvider>
    </Router>
  )
}

export default App
