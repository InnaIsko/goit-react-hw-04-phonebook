import { useState } from 'react';
import { Box } from 'components/Box';
import PropTypes from 'prop-types';

import { Input, Label, BtnForm } from './Form. styled';

export function ContactForm({ onSubmitForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const getInputValue = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const handleSabmit = event => {
    event.preventDefault();

    onSubmitForm(name, number);

    setName('');
    setNumber('');
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      action=""
      onSubmit={handleSabmit}
    >
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={getInputValue}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={getInputValue}
        />
      </Label>
      <BtnForm type="submit">Add Contact</BtnForm>
    </Box>
  );
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
