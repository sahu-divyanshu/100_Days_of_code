
import './App.css';
import Axios from "axios";
import {useState } from 'react';
function App() {
 
  const [generateedExcuse,setGenerratedExcuse] = useState("");
  const fetchExcuse=(excuse) =>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
      setGenerratedExcuse(res.data[0].excuse);
     
    })
  }

  return (
    <div className="App">
      <h1> Generate Excuse For : </h1>
      <button onClick={()=> fetchExcuse("party")}>party</button>

      <button onClick={()=> fetchExcuse("family")}>family</button>
      <button onClick={()=> fetchExcuse("office")}>office</button>
      <button onClick={()=> fetchExcuse("college")}>college</button>
      <h2>{generateedExcuse}</h2>
    </div>
  );
}

export default App;
