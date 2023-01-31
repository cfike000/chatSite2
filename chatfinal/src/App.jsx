import AnimatedRoutes from "./components/AnimatedRoutes"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import { SlideContextProvider } from "./context/SlideContext"
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <SlideContextProvider>
          <AnimatedRoutes />
        </SlideContextProvider>
      </AuthContextProvider>
    </Router>
  )
}

export default App
