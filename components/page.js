import Meta from './meta'
import Sidebar from './sidebar'
import Header from './header'

export default ({ children, heading }) => (
  <div className='page'>
    <Meta />
    <aside>
      <Sidebar />
    </aside>
    <main>
      <Header heading={heading} />
      {children}
    </main>
    <style jsx>
      {`
      .page {
        display: flex;
        height: 100vh;
      }

      aside {
        flex: 1;
        max-width: 400px;
      }

      main {
        flex: 3;
      }
    `}
    </style>
  </div>
)
