export default ({ title, description, completed }) => (
  <div className="todo">
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>  
    <style jsx>
      {`
      .todo {
        padding: 26px 0;
        display: flex;
      }
    `}
    </style>
  </div>
)