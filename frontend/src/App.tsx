import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/Signup"
import { SignIn } from "./pages/SignIn"
import { Dashboard } from "./pages/Dashboard"
import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
