import React from "react"
import { TodoId, type Todo as TodoType } from "../types" // as al importar permite renombrar el nombre del import

interface Props extends TodoType { // con extends se hereda los atributos de la interface TodoType
    onRemoveTodo: ({ id }: TodoId) => void,
    onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}
const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {

    // así se tipa una event, en este caso por que es de chabge y la etiqueta es un inpute
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleted({ //Invocacion de la funcion
            id,
            completed:event.target.checked // recupera el valor booleano de un checkbox o radio
        })
    }
    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={handleCheckboxChange}
            /*otra forma de hacerlo
                 onChange={(event)=>{
                    onToggleCompleted({id,completed:event.target.checked})
                }}
            */
            />
            <label >{title}</label>
            <button
                className="destroy"
                onClick={() => { onRemoveTodo({ id }) }}
            ></button>
        </div>
    )
}

export { Todo }

