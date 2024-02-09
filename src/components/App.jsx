import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { Section } from './section';
import { Filter } from './Filter/Filter';

let initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (arr, reset) => {
    const { name } = arr;
    if (this.checkContactAdd(name)) {
      alert(`${name} already added`);
      reset();
      return;
    }
    let contact = {
      id: nanoid(),
      ...arr,
    };
    this.setState(prev => {
      return { contacts: [contact, ...prev.contacts] };
    });
  };
  changeFilter = ev => {
    this.setState({ filter: ev.target.value });
  };

  deleteContact = id => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(contact => contact.id !== id) };
    });
  };

  checkContactAdd = name => {
    let normolizeName = name.toLowerCase();
    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === normolizeName
    );
  };
  render() {
    const normolizeFilter = this.state.filter.toLowerCase();
    const filterList = this.state.contacts.filter(fil =>
      fil.name.toLowerCase().includes(normolizeFilter)
    );
    return (
      <>
        <Section title="PhoneBook">
          <Form addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} changeFilter={this.changeFilter} />
          <ContactList arr={filterList} deleteContact={this.deleteContact} />
        </Section>
      </>
    );
  }
}
