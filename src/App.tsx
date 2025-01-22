import { useState } from "react"
import { Todos } from "./Components/Todos"
import { type TodoId, type Todo as TodoType } from "./types"

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
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId) => {
    const newTodo = todos.filter(todo => todo.id != id)
    setTodos(newTodo)
  }

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
  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleComplete}
        todos={todos}
      />
    </div>
  )
}

export default App
