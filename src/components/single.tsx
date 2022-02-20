
interface Props{
    todo:string
    todos:string[]
    setTodos: React.Dispatch<React.SetStateAction<string[]>>
    
}


const SingleTodo:React.FC<Props>=({todo,todos,setTodos})=>{
    
    const deletetodo=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
       const element=e.target as HTMLButtonElement
       const name=element.name
       
       setTodos(todos.filter(single=>single!== name))
    }
    
   

    return(
        <>
        <li>
            <span>{todo}</span>
            <button onClick={deletetodo} name={todo}>x</button>
        </li>
        </>
    )
}
export default SingleTodo