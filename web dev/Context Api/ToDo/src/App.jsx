import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./contexts";
import { useState,useEffect } from "react";


function App() {
  const[todos,setTodos] = useState([]);
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo },...prev])
  }

  const updateTodo =(id,todo) =>{
    setTodos((prev)=> prev.map((singlePrevTodo) => singlePrevTodo.id === id? todo:singlePrevTodo ))
  }

  const deleteTodo= (id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id!== id ))
  }
  
  const toggleComplete = (id) =>{
    setTodos((prev)=> prev.map((singlePrevTodo) => singlePrevTodo.id === id? {...singlePrevTodo,completed:!singlePrevTodo.completed}:singlePrevTodo))
  }


  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos));
      } catch (error) {
        // Handle the error, for example:
        console.error("Error parsing stored todos:", error);
      }
    }
  }, []);
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    
      <TodoProvider
        value={{ todos,addTodo,updateTodo,deleteTodo,toggleComplete }}
      >

        <div className=" bg-[#172842] min-h-screen py-8 z-10">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Work
            </h1>
            <div className="mb-4">{/* Todo form goes here */}
            <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>))}
            </div>
          </div>
        </div>
      </TodoProvider>
    
  );
}

export default App;
