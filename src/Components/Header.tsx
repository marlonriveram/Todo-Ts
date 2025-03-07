import { type TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props{
    addTodo:({title}:TodoTitle) => void
}

const Header:React.FC<Props> = ({addTodo}) =>{
    return(
        <header className="header">
            <h1>Todo <img 
                style={{width:'60px', height:'auto'}}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' alt="" /></h1>

            <CreateTodo saveTodo= {addTodo}/>

        </header>
    )
}

export { Header }