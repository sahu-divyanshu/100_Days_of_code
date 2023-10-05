import { useContext } from "react"
import UserContext from "../Context/UserContext"

const Profile = () => {

    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext)
    const handleLogout =(e)=>{
        e.preventDefault();
      setUser(null);
      }
  
  if(!user) return <div className="logout" ><h1>Plz Login</h1></div>
    return (
    <div className="logout" >
        <h1>Welcome <span className="user-name">{user.name}</span> Sir</h1>
        <button className="btn" onClick={(e)=>handleLogout(e)} >Logout</button>
    </div>
  )
}

export default Profile;
