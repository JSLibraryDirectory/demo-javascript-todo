import Link from './link'
import ListTags from './listTags'
import ListStatuses from './listStatuses'

export default () => (
  <div className="sidebar">
    <header>
      <h1>Rapid.io Demo App</h1>
    </header>
    <div className="body">
      <Link className="button" href="/create">
        Create Task
      </Link>
      <ListTags />
      <ListStatuses />
    </div>
    
    <style jsx>
      {`
      .sidebar {
        height: 100%;
        border-right: 1px solid #EEEBF3;   
      }

      header {
        display: block;
        height: 80px;
        border-bottom: 1px solid #EEEBF3;
        display: flex;
        align-items: center;
        padding-left: 130px;
      }

      h1 {
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0;
        padding: 0;
      }

      .body {
        padding: 42px 36px 42px 130px;
      }
      `}
    </style>
  </div>
)
