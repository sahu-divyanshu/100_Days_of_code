import {useState} from "react";
import './App.css';
import Modal from "./Modal";

function App() {
  const [openModal,setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>hey, click on the button to open the Modal </h1>
      <button className='btn'
      onClick={()=> {
        setOpenModal(true);
      }} >Open</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
