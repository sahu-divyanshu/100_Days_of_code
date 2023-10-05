
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

import UserContext from "./Context/UserContext"
import { useContext } from 'react'

function App() {

 
  const {user} = useContext(UserContext)

  return (
    
      <div>
            {user? <Profile/> : <Login/>}
      </div>

 
  )
}

export default App
