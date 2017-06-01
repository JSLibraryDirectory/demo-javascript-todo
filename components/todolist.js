import Todo from './todo'

export default ({ todos }) => (
  <div>
    {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    <style jsx>
      {`

      `}
    </style>
  </div>
)
