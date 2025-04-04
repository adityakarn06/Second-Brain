import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {navigate("/signup")}, 100);
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default LandingPage
