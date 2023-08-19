
import './App.css';
import Navbar from "./components/Navbar";
import {HashRouter as Router, Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
    
      <Router>

        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/products"/>
          <Route path="/contact"/>
          <Route path="/about"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
