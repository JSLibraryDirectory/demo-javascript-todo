import Checkbox from './checkbox'
import Priority from './priority'
import Badge from './badge'

export default ({
  onCheckboxClick,
  onTodoClick,
  title,
  description,
  completed,
  tag,
  priority
}) => (
  <div className="todo">
    <div className="left">
      <Checkbox checked={completed} onChange={onCheckboxClick} />
      <div className="text" onClick={onTodoClick}>
        <h2>
          <span className="title">{title}</span>
          <Badge type={tag} margin="-4px 0 0 20px">{tag}</Badge>
        </h2>
        <p>{description}</p>
      </div>
    </div>
    <div className="right">
      <Priority priority={priority} />
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
        cursor: pointer;
        margin: 0 30px;
      }
      h2 {
        line-height: 1.3;
        margin-bottom: 8px;
      }
      .title {
        font-weight: 600;
        line-height: 1.3;
        border-bottom: 2px solid #fff;
        transition: border .2s ease;     
      }
      h2:hover .title {
        border-bottom: 2px solid #EEEBF3;
      }
    `}
    </style>
  </div>
)
