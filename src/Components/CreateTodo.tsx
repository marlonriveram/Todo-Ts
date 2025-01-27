import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}
const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit= (event: React.KeyboardEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
        placeholder="¿ Que quieres hacer ?"
        autoFocus // pone el cursor autometicamente en el input
        type="text" />
    </form>
  )
}

export { CreateTodo }