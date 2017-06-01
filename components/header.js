export default ({ heading }) => (
  <header>
    <div className="wrap">
      <h1>{heading}</h1>
      <div className="right">
        <button>Sort By</button>
        <button>Date Created</button>
      </div>
    </div>
    <style jsx>
      {`
      header {
        height: 80px;
        display: flex;
        align-items: center;
        padding-left: 60px;
        border-bottom: 1px solid #EEEBF3;
      }
      .wrap {
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      button {
        font-size: 1rem;
        border: none;
        background: none;
        cursor: pointer;
      }
      h1 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }
    `}
    </style>
  </header>
)
