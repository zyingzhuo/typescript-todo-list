import { setFlagsFromString } from "v8"
import {useState} from 'react'

interface Props{
    todo:string
    todos:string[]
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
    setTodo:React.Dispatch<React.SetStateAction<string>>
    index:number
}


const SingleTodo:React.FC<Props>=({todo,todos,setTodos, setTodo,index})=>{
    const[form, setForm]=useState(false)
    const[current,setCurrent]=useState(todo)

    const deletetodo=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
       const element=e.target as HTMLButtonElement
       const name=element.name
       
       setTodos(todos.filter(single=>single!== name))
    }
    
    const update=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        // setTodo(todo)
        let temp=[...todos]
        temp[index]=current
        setTodos([...temp])
        setForm(false)
    }
   
   
    return(
        <>
        <li>
            <span>{todo}</span>
            <button onClick={deletetodo} name={todo}>x</button>
            <button onClick={()=>setForm(true)} >update</button>
            {form?(
                // <form >
                <form>
                    <input 
                    
                    value={current}
                    onChange={(e)=>setCurrent(e.target.value)}
                    />
                    <button onClick={update}>update</button>
                </form>
               
            ):""}
        </li>
        </>
    )
}
export default SingleTodo