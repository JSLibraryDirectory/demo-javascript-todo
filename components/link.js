import Link from 'next/link'

export default ({
  href,
  type,
  children,
  onClick,
  inverted = false,
  margin = 0,
  prefetch = false
}) => {
  if (type === 'button') {
    return (
      <button
        type="button"
        className={`button ${inverted && 'inverted'}`}
        style={{ margin }}
        onClick={onClick}
      >
        {children}
        <style jsx>{`
          .button {
            background: #CF4647;
            padding: 23px 0;
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
            outline: none;
            line-height: 1;
          }

          .button:hover {
            color: #CF4647;
            background: white;
          }

          .button.inverted {
            background: white;              
            color: #CF4647;
            border: 1px solid #CF4647;
          }
          
          .button.inverted:hover {
            background: #CF4647;
            color: white;                        
          }
        `}</style>
      </button>
    )
  }

  return (
    <Link href={href} prefetch={prefetch}>
      <a className={`button ${inverted && 'inverted'}`} style={{ margin }}>
        {children}
        <style jsx>{`
          .button {
            background: #CF4647;
            padding: 23px 0;
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
            outline: none;
            line-height: 1;
          }

          .button:hover {
            color: #CF4647;
            background: white;
          }

          .button.inverted {
            background: white;              
            color: #CF4647;
            border: 1px solid #CF4647;
          }
          
          .button.inverted:hover {
            background: #CF4647;
            color: white;                        
          }
        `}</style>
      </a>
    </Link>
  )
}
