import React,{useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

function App() {
  const[inputValue,setInterval]=useState('')
  const[todoList,setTodoList]= useState([]) 
  const addItem = () =>{
    console.log('im heheheheheh!',inputValue)
    setTodoList(...todoList.inputValue)
  }
  return (
    <main>
    <input value={inputValue}
    type = "text" onChange={(event)=>setInterval(event.target.value)}/>
    <button onClick={addItem}>추가</button>

    <TodoBoard todoList={todoList}/>
    </main>
  );
}

export default App;
