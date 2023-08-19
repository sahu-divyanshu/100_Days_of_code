
import './App.css';
import {useState} from "react";
function App() {
  
  const[todolist,setTodoList] = useState([]);
  const[newTask,setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () =>{
   const newTodoList = [...todolist,newTask];
   setTodoList(newTodoList); 
  }

  const deleteTask = (taskName) =>{
    const newTodoList = todolist.filter((task) =>{
      if(task === taskName){
        return false;
      }
      else{
        return true;
      }
    })
    setTodoList(newTodoList);
  }
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
  
      <div className='list'>
        {todolist.map((task) => {
          return <div>
            <h1> {task} </h1>
            <button onClick={() =>deleteTask(task)}> X </button>
            </div>
        })}
      </div>
    </div>
  );
}

export default App;
