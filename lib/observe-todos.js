import { todos } from './client'

export const observeTodos = (onvalue, onerror) => {
  return todos.subscribe(onvalue, onerror)
}