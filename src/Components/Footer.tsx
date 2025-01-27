import { type FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCount:number,
    completedCount:number,
    filterSelected:FilterValue,
    onClearCompleted:() => void,
    handleFilterChange:(filter:FilterValue) => void
}
const Footer:React.FC<Props> = ({
    activeCount = 0,
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
}) =>{
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> Tareas Pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                handleFilterChange={handleFilterChange}
            />
            {
                completedCount > 0  && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}
                    >
                        Borrar Completadas
                    </button>
                )
            }
        
        </footer>
    )
}

export { Footer }