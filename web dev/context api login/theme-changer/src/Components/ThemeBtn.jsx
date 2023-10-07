
import useTheme from "../Context/Theme"
import "./Login.css"
const ThemeBtn = () => {
  const {themeMode,lightTheme,darkTheme} =  useTheme();

  const onChangeBtn = (e) =>{
    const darkModeStatus = e.currentTarget.checked 
    if(darkModeStatus){
        darkTheme();

    }else{
        lightTheme();
    }
  }
  return (
    <div>
      <button  className="themebtn" > <input type="checkbox" value="" onChange={onChangeBtn} checked={themeMode === "dark"}/>Toggle Theme </button>
    </div>
  )
}

export default ThemeBtn
