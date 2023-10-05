import { useContext,useState } from "react"
import UserContext from "../Context/UserContext"
import "./Login.css"
const Login = () => {
    const [name ,setName] = useState("")

    const [email ,setEmail] = useState("")

    const [password ,setPassword] = useState("")

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
      e.preventDefault();
      setUser({name,email,password})
   
    }
  return (
    <div className="login ">
      <form className="login-form" action="" onSubmit={(e)=>handleSubmit(e)}>
        <h2 className="m-20">Login Here </h2>
        <input type="name" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  )
}

export default Login
