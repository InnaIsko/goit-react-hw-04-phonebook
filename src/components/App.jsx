import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';

import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getInputValueFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deliteConacts = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  handleSabmitForm = ({ name, number }) => {
    this.setState(prevState => {
      const nameFilter = prevState.contacts.some(elem => elem.name === name);
      if (nameFilter) {
        alert(`${name} is olredi in contacts`);
      } else {
        return {
          contacts: [
            ...prevState.contacts,
            {
              name,
              number,
              id: nanoid(),
            },
          ],
        };
      }
    });
  };

  render() {
    const filterContacts = this.state.contacts.filter(value =>
      value.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Box bg="body" pl="40px" pr="40px">
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.handleSabmitForm} />
        <h2>Contacts</h2>
        <ContactList
          onFilterContacts={filterContacts}
          onContactsDelite={this.deliteConacts}
        />
        <Filter
          onFilterValue={this.state.filter}
          onGetInputValue={this.getInputValueFilter}
        />
      </Box>
    );
  }
}
