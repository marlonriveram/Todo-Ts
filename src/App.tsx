import { useState } from "react"
import { Todos } from "./Components/Todos"

const mockTodos = [
  {
    id:'1',
    title:'todo 1',
    completed:true
  },
  {
    id:'2',
    title:'todo 2',
    completed:false
  },
  {
    id:'3',
    title:'todo 3',
    completed:false
  },
  {
    id:'4',
    title:'todo 4',
    completed:false
  },

]


const App = ():JSX.Element => {
  const [todos,setTodos] = useState(mockTodos)

  const handleRemove = (id:string) =>{
    const newTodo = todos.filter(todo => todo.id != id)
    setTodos(newTodo)
  }
return(
  <div className="todoapp">
    <Todos 
    todos={todos}
    onRemoveTodo = {handleRemove}
    />
  </div>
)
}

export default App
