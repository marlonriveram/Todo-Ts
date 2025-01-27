import { useState } from "react"
import { Todos } from "./Components/Todos"
import { TodoTitle, type FilterValue, type TodoId, type Todo as TodoType } from "./types" // as para renombrar
import { TODO_FILTERS } from "./const"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  },
  {
    id: '4',
    title: 'todo 4',
    completed: false
  },

]


const App = (): JSX.Element => {
  // Todos
  const [todos, setTodos] = useState(mockTodos)      //Asi se tipa un useState
  // filtro actaul y actualizador
  const [filterSelected,setFilterselected] = useState<FilterValue>(TODO_FILTERS.ALL)

  // funcion para remover todos
  const handleRemove = ({ id }: TodoId) => {
    const newTodo = todos.filter(todo => todo.id != id)
    setTodos(newTodo)
  }

   // funcion para completar todos
  const handleComplete = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
       return{
        ...todo,
        completed
       }
      }
      return todo
    })

    setTodos(newTodos)
  }

  // funcion para cambiar el tipo de filtro
  const handleFilterChange= (filter:FilterValue): void => {
   setFilterselected(filter)
  }

  const handleRemoveAlllCompleted = ():void =>{
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVED) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const hadleAddTodo = ({title}:TodoTitle):void =>{
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed:false
    }

    const newTodos = [...todos,newTodo]
    setTodos(newTodos)
    // setTodos((prevItems) => [...prevItems, newTodo]);
  }

  return (
    <div className="todoapp">
      <Header addTodo={hadleAddTodo}/>
      <Todos
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleComplete}
        todos={filteredTodos}
      />
      
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected = {filterSelected}
        onClearCompleted={handleRemoveAlllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
