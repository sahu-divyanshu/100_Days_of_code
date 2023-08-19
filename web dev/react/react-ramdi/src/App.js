
import './App.css';
import { Navbar } from './components/Navbar';
// import {
//   HashRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import About from './pages/About';

function App() {
  return (
    <div className="App">
     
      {/* <HashRouter> */}
        <Navbar/>

{/*        
        <Routes>
           
            <Route path="/About" element={<About />} />
        </Routes>
      
     
    </HashRouter> */}
    </div>
  );
}

export default App;
