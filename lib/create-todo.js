import { todos } from './client'

export default async ({ title, description, priority, tag, completed = false }) => {
  await todos.newDocument().mutate({
    title,
    description,
    priority,
    tag,
    completed
  })
}