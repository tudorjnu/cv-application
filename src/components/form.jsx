export function Input({ id, label, type, placeholder, required }) {
  return (
    <div>
      <label for={id}>
        {required === undefined ? `${label}:` : `${label}*:`}
      </label>
      <br />
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required || false}
      />
    </div>
  );
}
