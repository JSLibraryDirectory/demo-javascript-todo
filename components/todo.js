import Checkbox from './checkbox'
import Priority from './priority'

export default ({ title, description, completed, priority }) => (
  <div className="todo">
    <div className="left">
      <Checkbox />
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    <div className="right">
      <Priority priority={priority}/>
    </div>
    <style jsx>
      {`
      .todo {
        padding: 26px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #EEEBF3;
      }
      .left {
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