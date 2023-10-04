import { useDispatch, useSelector } from "react-redux";
import "./Login.css"
import { logout, selectUser } from "../Features/userSlice";
const Logout = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout =(e)=>{
    e.preventDefault();

    dispatch(logout());
  }
  return (
    <div className="logout" >
      <h1>Welcome <span className="user-name">{user.name}</span> Sir</h1>
      <button className="btn" onClick={(e)=>handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout
