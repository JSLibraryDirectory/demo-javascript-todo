export default ({ placeholder, value, onChange, name }) => (
  <div>
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange} />
    <style jsx>
      {`
      input {
        border: 1px solid #EEEBF3;
        border-radius: 4px;
        padding: 20px;
        font-size: 1.1rem;
        width: 100%;
      }
    `}
    </style>
  </div>
)
