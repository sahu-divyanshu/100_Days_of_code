
import { useSelector } from 'react-redux'
import './App.css'
import Login from './Components/Login'
import Logout from './Components/Logout'
import { selectUser } from './Features/userSlice'


function App() {

const user = useSelector(selectUser);
  return (
    <>
      {user? <Logout/> : <Login/>}
    </>
  )
}

export default App
