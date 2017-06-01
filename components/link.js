import Link from 'next/link'

export default ({ href, children, onClick, inverted = false, margin = 0 }) => (
  <Link href={href}>
    <a className={inverted && 'inverted'} style={{margin}}>
      {children}
      <style jsx>
        {`
        a {
          background: #CF4647;
          padding: 15px 0;
          text-align: center;
          min-width: 244px;
          display: inline-block;
          cursor: pointer;
          border-radius: 4px;
          font-size: 1.8rem;
          color: white;
          text-decoration: none;
          transition: .5s ease;
          border: 1px solid #CF4647;
        }

        a:hover {
          color: #CF4647;
          background: white;
        }

        a.inverted {
          background: white;              
          color: #CF4647;
          border: 1px solid #CF4647;
        }
        
        a.inverted:hover {
          background: #CF4647;
          color: white;                        
        }
      `}
      </style>
    </a>
  </Link>
)
