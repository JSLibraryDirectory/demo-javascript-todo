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
      }
      button.home {
        background-color: #3F91EB;
        border: 1px solid #3F91EB;        
        color: white;
      }
      button.work {
        background-color: #CF4647;
        border: 1px solid #CF4647;                
        color: white;
      }
      button.other {
        background-color: #85D95B;
        border: 1px solid #85D95B;
        color: white;
      }
    `}
    </style>
  </button>
)

export default ({ onClick, selected }) => (
  <div>
    <span>Tags</span>
    <Tag onClick={() => onClick('home')} selected={selected === 'home' && 'home'} margin="0 20px 0 0">
      Home
    </Tag>
    <Tag onClick={() => onClick('work')} selected={selected === 'work' && 'work'} margin="0 20px 0 0">
      Work
    </Tag>
    <Tag onClick={() => onClick('other')} selected={selected === 'other' && 'other'}>
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
