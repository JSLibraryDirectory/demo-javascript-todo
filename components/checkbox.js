export default ({ checked = true, onChange }) => (
  <div>
    <input type='checkbox' checked={checked} onChange={onChange} />
    <style jsx>
      {`
      input {
        appearance: none;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 4px;
        position: relative;
      }
      input:checked {
        background: #CF4647;
      }
      input:checked:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHRpdGxlPiAgICAgICAgRmlsbCAzICA=gIDwvdGl0bGU+ICAgIDxwYXRoIGQ9Ik03Ljc1IDExTDEuOTg0IDUuMzkuNzUgNi42MjZsNyA2Ljk5OUwxOS41NjIgMS44MTIgMTguMzMuNTh6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
      }
    `}
    </style>
  </div>
)
