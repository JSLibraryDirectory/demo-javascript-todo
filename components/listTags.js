import Badge from './badge'
import Check from './iconCheck'

export default () => (
  <div>
    <h2>Tags</h2>
    <ul>
      <li className="home">
        Home
        <Check />
        <Badge type="home">3</Badge>
      </li>
      <li className="work">
        Work
        <Badge type="work">21</Badge>
      </li>
      <li className="other">
        Other
        <Badge type="other">3</Badge>
      </li>
    </ul>

    <style jsx>
      {`
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          padding: 0; 
          margin: 10px 0;
          clear: both;
          cursor: pointer;
          font-size: 1.5rem;
          position: relative;  
          transition: color .2s ease;        
        }

        li:hover {
          color: #CF4647;
        }

        li:before {
          width: 10px;
          height: 10px;
          content: '';
          border-radius: 100%;
          display: inline-block;
          margin-right: 20px;
        }

        li.other:before{
          background-color: #95E16F;
        }

        li.work:before{
          background-color: #CF4647;
        }

        li.home:before{
          background-color: #3F91EB;
        }

        li :global(.badge) {
          float: right;
        }

        li :global(.icon) {
          position: absolute;
          right: 60px;
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
