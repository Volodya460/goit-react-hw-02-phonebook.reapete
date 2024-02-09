import { Contact } from '../Contact/Contact';

export function ContactList({ arr, deleteContact }) {
  return (
    <>
      {arr.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </>
  );
}
