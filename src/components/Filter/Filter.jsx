export function Filter({ value, changeFilter }) {
  return (
    <>
      <h2>Find Contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        name="filter"
      ></input>
    </>
  );
}
