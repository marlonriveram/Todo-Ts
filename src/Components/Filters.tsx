import { FilterValue } from "../types"

// typeof se usa para obtener el tipo del objeto TODO_FILTERS

interface Props {
    onFilterChange:(filter:FilterValue)=>void
    filterSelected:FilterValue
}
   
   

const Filters:React.FC<Props> =(
    { filterSelected,onFilterChange }
) =>{
    return(
        <ul className="filters">
            <li>
                <a 
                    className={`${filterSelected === 'all' ? 'selected' : ''}`}
                    onClick={() =>
                        onFilterChange('all')
                    }
                >
                    Todos
                </a>
            </li>
            <li>
                <a 
                    className={`${filterSelected === 'active' ? 'selected' : ''}`}
                    onClick={() =>
                        onFilterChange('active')
                    }
                >
                    Activos
                </a>
            </li>
            <li>
                <a 
                    className={`${filterSelected === 'completed' ? 'selected' : ''}`}
                    onClick={() =>
                        onFilterChange('all')
                    }
                >
                    Completos
                </a>
            </li>
        </ul>
    )
}

export { Filters}