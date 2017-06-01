import Badge from './badge'
import Check from './iconCheck'

export default () => (
  <div>
    <h2>Status</h2>
    <ul>
      <li><Check /> All</li>
      <li>Completed</li>
      <li>Incompleted</li>    
    </ul>

    <style jsx>
      {`
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          padding: 0 0 0 30px; 
          margin: 5px 0;
          position: relative;
          cursor: pointer;
          font-size: 1.5rem;
        }

        li > :global(.icon) {
          position: absolute;
          left: 0;
        }

        h2 {
          font-size: 1.6rem;
          font-weight: 600;
          margin: 32px 0 20px;
        }
      `}
    </style>
  </div>
)
