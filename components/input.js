export default ({ placeholder, value, onChange, name, margin = 0 }) => (
  <div>
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      style={{ margin }} />
    <style jsx>
      {`
      input {
        border: 1px solid #EEEBF3;
        border-radius: 4px;
        padding: 20px;
        font-size: 1.8rem;
        width: 100%;
        display: block;
      }
    `}
    </style>
  </div>
)
