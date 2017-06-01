import Checkbox from './checkbox'
import Priority from './priority'
import Badge from './badge'

export default ({ title, description, completed, tag, priority }) => (
  <div className="todo">
    <div className="left">
      <Checkbox />
      <div className="text">
        <h2>
          {title}
          <Badge type={tag} margin="-4px 0 0 20px">{tag}</Badge>
        </h2>
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
        margin-bottom: 8px;
      }
    `}
    </style>
  </div>
)