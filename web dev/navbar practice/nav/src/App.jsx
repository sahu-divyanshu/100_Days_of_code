import Navbar from './Components/Navbar'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom' 
import './App.css'

function App() {


  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element />
      <Route path='/Products' />
      <Route path='/Contact' />
      <Route path='/About' />



    </Routes>
   </Router>
    </>
  )
}

export default App
