import SortBy from './sortby'

export default ({ heading }) => (
  <header>
    <div className="wrap">
      <h1>{heading}</h1>
      <div className="right">
        <SortBy />
      </div>
    </div>
    <style jsx>
      {`
      header {
        height: 80px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #EEEBF3;
      }
      .wrap {
        width: 100%;
        margin-left: 60px;
        max-width: 840px;
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
