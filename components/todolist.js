import Todo from './todo'

export default ({ todos, onCheckboxClick, onTodoClick }) => (
  <div>
    {todos.map(todo => 
        <Todo
          key={todo.id} {...todo.body}
          onCheckboxClick={() => onCheckboxClick(todo.id, todo.body.completed)}
          onTodoClick={() => onTodoClick(todo.id)}
        />
      )
    }
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
