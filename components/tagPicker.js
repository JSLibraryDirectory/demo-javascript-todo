const Tag = ({ children, selected, margin, onClick }) => (
  <button onClick={onClick} className={selected} style={{ margin }}>
    {children}
    <style jsx>
      {`
      button {
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        min-width: 85px;
        font-size: 1.6rem;
        color: white;
        border-radius: 4px;
        background-color: white;
        border: 1px solid #AEA9BF;
        color: #AEA9BF;
        outline: none;
        transition: background-color .2s ease, color .2s ease, border .2s ease;
      }
      button.home.selected {
        background-color: #3F91EB;
        border: 1px solid #3F91EB;        
        color: white;
      }
      button.home:hover {
        border-color: #3F91EB;
        color: #3F91EB;
      }
      button.work.selected {
        background-color: #CF4647;
        border: 1px solid #CF4647;                
        color: white;
      }
      button.work:hover{
        border-color: #CF4647;
        color: #CF4647;
      }
      button.other.selected {
        background-color: #85D95B;
        border: 1px solid #85D95B;
        color: white;
      }
      button.other:hover{
        border-color: #85D95B;
        color: #85D95B;
      }
      button.selected:hover {
        color: #fff;
        cursor: default;
      }
    `}
    </style>
  </button>
)

export default ({ onClick, selected }) => (
  <div>
    <span>Tags</span>
    <Tag
      onClick={() => onClick('home')}
      selected={`home ${selected.indexOf('home') > -1 && 'selected'}`}
      margin="0 20px 0 0"
    >
      Home
    </Tag>
    <Tag
      onClick={() => onClick('work')}
      selected={`work ${selected.indexOf('work') > -1 && 'selected'}`}
      margin="0 20px 0 0"
    >
      Work
    </Tag>
    <Tag
      onClick={() => onClick('other')}
      selected={`other ${selected.indexOf('other') > -1 && 'selected'}`}
    >
      Other
    </Tag>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
      }
      span {
        font-size: 1.8rem;
        font-weight: 600;
        margin-right: 33px;
      }
    `}</style>
  </div>
)

