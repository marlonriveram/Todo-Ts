import { TODO_FILTERS } from "./const"

export type ListOfTodos = Todo[]
export interface Todo{
    id: string,
    title: string,
    completed: boolean,
}

export type TodoId = Pick<Todo,'id'> // // Pick selecciona propiedades específicas de un tipo
export type TodoTitle = Pick<Todo,'title'> // // Pick selecciona propiedades específicas de un tipo
export type TodoCompleted = Pick<Todo,'completed'> // // Pick selecciona propiedades específicas de un tipo}



export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS] // Indexacion de tipos