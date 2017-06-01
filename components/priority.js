const constants = {
  low: 1,
  medium: 2,
  high: 3
}

const Dot = () => (
  <span>
    <style jsx>
      {`
      span {
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background: black;
        margin: 2px;
        display: inline-block;
      }
    `}
    </style>
  </span>
)

export default ({ priority }) => (
  <div>
    {[...Array(constants[priority]).keys()].map(val => <Dot key={val} />)}
    <style jsx>
      {`
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}
    </style>
  </div>
)
