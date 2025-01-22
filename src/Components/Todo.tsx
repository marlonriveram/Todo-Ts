import { type Todo as TodoType } from "../types" // as al importar permite renombrar el nombre del import

interface Props extends TodoType{ // con extends se hereda los atributos de la interface TodoType
    onRemoveTodo:(id:string) => void
}
const Todo:React.FC<Props> = ({id,title,completed,onRemoveTodo}) =>{
    return(
        <div className="view">
            <input 
                className="toggle"
                checked={completed}
                type="checkbox" 
                onChange={()=>{}}
                />
                <label >{title}</label>
                <button
                    className="destroy"
                    onClick={() =>{onRemoveTodo(id)}}
                ></button>
        </div>
    )
}

export { Todo}