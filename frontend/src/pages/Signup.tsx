import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(`${BACKEND_URL}` + "/api/v1/user/signup", {
      username,
      password
    })
    alert("signup successful");
    navigate("/signin");
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
      <div className="flex justify-center pb-6 text-xl">
        Create your account
      </div>
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />
        <div className="flex justify-center p-4">
          <Button onClick={signup} loading={false} variant="primary" text="Signup" fullWidth={true} size="md" />
        </div>
      </div>
    </div>
  )
}
