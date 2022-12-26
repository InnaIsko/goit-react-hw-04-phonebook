import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';

import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getInputValueFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deliteContacts = contactID => {
    const del = contacts.filter(contact => contact.id !== contactID);
    setContacts(del);
  };

  const handleSabmitForm = (name, number) => {
    const nameFilter = contacts.some(elem => elem.name === name);

    if (nameFilter) {
      alert(`${name} is olredi in contacts`);
    } else {
      setContacts(state => {
        const newContacts = {
          name,
          number,
          id: nanoid(),
        };
        return [...state, newContacts];
      });
    }
  };

  const filterContacts = contacts.filter(value =>
    value.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box bg="body" pl="40px" pr="40px">
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={handleSabmitForm} />
      <h2>Contacts</h2>
      <ContactList
        onFilterContacts={filterContacts}
        onContactsDelite={deliteContacts}
      />
      <Filter onFilterValue={filter} onGetInputValue={getInputValueFilter} />
    </Box>
  );
}
