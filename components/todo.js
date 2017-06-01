import Checkbox from './checkbox'

export default ({ title, description, completed }) => (
  <div className="todo">
    <Checkbox />
    <div className="text">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>  
    <style jsx>
      {`
      .todo {
        padding: 26px 0;
        display: flex;
        align-items: center;
      }
      .text {
        margin: 0 30px;
      }
      h2 {
        font-weight: 600;
      }
    `}
    </style>
  </div>
)