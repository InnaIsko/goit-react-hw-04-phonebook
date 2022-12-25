import { Component } from 'react';
import { Box } from 'components/Box';

import { Input, Label, BtnForm } from './Form. styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  getInputValue = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSabmit = event => {
    event.preventDefault();

    this.props.onSubmitForm(this.state);

    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        action=""
        onSubmit={this.handleSabmit}
      >
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.getInputValue}
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
            value={this.state.number}
            onChange={this.getInputValue}
          />
        </Label>
        <BtnForm type="submit">Add Contact</BtnForm>
      </Box>
    );
  }
}
