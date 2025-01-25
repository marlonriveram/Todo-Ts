const Footer:React.FC<Props> = ({
    activeCount,
    todos,
    onClearTodos})
     =>{
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong> Tareas Pendientes
            </span>

            <Filters
                filterSelected={}
                onFilterChange={() =>{}}
            />
        
        </footer>
    )
}

export Footer