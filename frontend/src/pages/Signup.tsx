import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"

export const SignUp = () => {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
      <div className="flex justify-center pb-6 text-xl">
        Create your account
      </div>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="flex justify-center p-4">
          <Button loading={false} variant="primary" text="Signup" fullWidth={true} size="md" />
        </div>
      </div>
    </div>
  )
}
