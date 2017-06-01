export default ({ children, type, margin }) => (
  <span className={`badge ${type}`} style={{margin}}>
    { children }
    <style jsx>
      {`
        .badge {
          border-radius: 4px;
          color: #fff;
          font-size: 1.2rem;
          font-weight: 400;
          padding: 3px 10px;
          vertical-align: middle;
          display: inline-block;
          min-width: 40px;
          text-align: center;
        }
        .badge.other{
          background-color: #95E16F;
        }

        .badge.work {
          background-color: #CF4647;
        }

        .badge.home {
          background-color: #3F91EB;
        }
      `}
    </style>
  </span>

)