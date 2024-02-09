export function Contact({ id, name, number, deleteContact }) {
  return (
    <>
      <ul key={id}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
