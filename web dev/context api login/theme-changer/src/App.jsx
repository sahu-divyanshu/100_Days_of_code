
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Context/Theme'

import UserContext from "./Context/UserContext"
import { useContext, useEffect, useState } from 'react'

function App() {

 const [themeMode,setThemeMode] = useState("light"); 

 const lightTheme = () =>{
  setThemeMode("light")
 }
 const darkTheme = () =>{
  setThemeMode("dark")
 }

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])
  
const {user} = useContext(UserContext)

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <ThemeBtn/>
      <div>
            {user? <Profile/> : <Login/>}
      </div>

    </ThemeProvider>
  )
}

export default App
