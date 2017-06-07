import { todos } from './client'

export default (onvalue, onerror) => {
  return todos.subscribe(onvalue, onerror)
}