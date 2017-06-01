import Todo from './todo'

export default ({ todos }) => (
  <div>
    {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    <style jsx>
      {`
        div {
          margin-left: 60px;
          margin-right: 130px;
        }
      `}
    </style>
  </div>
)
