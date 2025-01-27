import { FilterValue } from "../types"
import { FILTERS_BUTTONS } from "../const"
// typeof se usa para obtener el tipo del objeto TODO_FILTERS

interface Props {
    handleFilterChange:(filter:FilterValue) => void
    filterSelected: FilterValue
}



const Filters: React.FC<Props> = (

    { filterSelected, handleFilterChange }
) => {

    return (
        <ul className="filters">

            {
                Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
                    
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''
                    return (
                        <li key={key}>
                            <a
                                href={href}
                                className={className}
                                onClick={(event) => {
                                    event.preventDefault()
                                    handleFilterChange(key as FilterValue)
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
            
        </ul>
    )
}

export { Filters }