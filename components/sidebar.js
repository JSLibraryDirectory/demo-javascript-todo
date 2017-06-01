import Link from './link'

export default () => (
  <div className="sidebar">
    <header>
      Rapid.io Demo App
    </header>
    <Link href="/create">
      Create Task
    </Link>
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
      }
      `}
    </style>
  </div>
)
