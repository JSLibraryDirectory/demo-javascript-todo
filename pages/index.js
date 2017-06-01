import Page from '../components/page'
import Header from '../components/header'
import TodoList from '../components/todolist'

export default () => (
  <Page heading="Tasks">
    <TodoList todos={todos}/>
  </Page>
)


const todos = [
  {
    id: 1,
    completed: false,
    title: 'hello',
    description: 'Some descriptioon'
  },
  {
    id: 2,
    completed: false,
    title: 'hello',
    description: 'Some descriptioon'
  },
  {
    id: 3,
    completed: false,
    title: 'hello',
    description: 'Some descriptioon'
  }
]