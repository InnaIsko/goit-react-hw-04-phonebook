import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem';

export function ContactList({ onFilterContacts, onContactsDelite }) {
  return (
    <ul>
      {onFilterContacts.map(contact => (
        <ContactListItem
          onContactInfo={contact}
          key={contact.id}
          onButtonDelite={onContactsDelite}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onFilterContacts: PropTypes.array.isRequired,
  onContactsDelite: PropTypes.func.isRequired,
};
