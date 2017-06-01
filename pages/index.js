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
    priority: 'low',
    completed: false,
    tag: 'home',
    title: 'hello',
    description: 'Some descriptioon'
  },
  {
    id: 2,
    priority: 'high',    
    completed: false,
    tag: 'work',
    title: 'hello',
    description: 'Some descriptioon'
  },
  {
    id: 3,
    priority: 'medium',
    completed: false,
    tag: 'other',
    title: 'hello',
    description: 'Some descriptioon'
  }
]