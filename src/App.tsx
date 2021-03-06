import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SingleTodo from './components/single';

// type Todo={
//   title:string
// }

// type Todos={
//   todos:Todo[]
// }


function App () {
   const [todos, setTodos]=useState<string[]>([])
  const [todo, setTodo]=useState("")

  const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!todo) {
      alert('please enter a todo')
    } else{
      setTodos([...todos,todo])
      setTodo("")
    }

  }

  

  return (
    <div className="App">
        <form onSubmit={onSubmit}>
            <input placeholder='add to do'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            />
            <button>Add</button>
        </form>
        
      {todos?.map((todo,index)=>(
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos} setTodo={setTodo} index={index}/>
      ))}
    </div>
  );

    }
export default App;
