
import './App.css';
import { useState } from "react";

function App() {
//   return (
//     <div className="App">
//       <Job salary={90000} position = "senior SDE" company="amazon"/>      
//       <Job salary={80000} position = "senior SDE" company="Google"/>      
//       <Job salary={70000} position = "senior SDE" company="Microsoft"/>      
//     </div>
//   );
// }
// // component 
// const Job =(props) =>{
//   return <div>
//     <h1> {props.salary}</h1>
//     <h1> {props.position}</h1>
//     <h1> {props.company}</h1>
//   </div>

// const planets =[
//   {name :"Mars", isGasPlanet:false},
//   {name :"Earth", isGasPlanet:false},
//   {name : "Jupiter", isGasPlanet:true},
//   {name :"Venus", isGasPlanet:false},
//   {name :"Neptune", isGasPlanet:true},
//   {name :"Uranus", isGasPlanet:true},
// ]

// return <div className ="App">
//    {planets.map((planet,key)=> planet.isGasPlanet && <h1>{planet.name}</h1>) }
// </div>

const [count,setCount] = useState(0);

const increase = () =>{
  setCount(count + 1);
}
const decrease = () =>{
  setCount(count - 1);
}
const setToZero = () =>{
  setCount(0);
}

return <div className='App'>
<button onClick={increase}>increase</button>
<button onClick={decrease}>decrease</button>
<button onClick={setToZero}>setToZero</button>
{count}
</div>
}

export default App;
