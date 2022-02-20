
interface Props{
    todo:string
}


const SingleTodo:React.FC<Props>=({todo})=>{

    return(
        <>
        <div>{todo}</div>
        </>
    )
}
export default SingleTodo