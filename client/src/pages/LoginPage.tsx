import { login, profile } from "../api/auth";
import { useAuthStore} from "../store/auth";

function LoginPage() {

  const setToken = useAuthStore(state => state.setToken)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    const resLogin = await login(email, password)

    setToken(resLogin.data.token)

    const resProfile = await profile()
    
  }



  return (
    <form onSubmit={handleSubmit}>
      <input type="email"  placeholder="Username" />
      <input type="password"  placeholder="Password" />
      <button>Login</button>
    </form>
  )
}

export default LoginPage