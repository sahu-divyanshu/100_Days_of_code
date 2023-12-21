import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { logout } from "../store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className=" bg-btn rounded-3xl inline-block px-6 py-2 text-textH font-semibold hover:scale-105   transition-all duration-500 z-50"
    onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn
