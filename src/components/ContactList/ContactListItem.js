import PropTypes from 'prop-types';
import { Contact, BtnDelite, ContactItem } from './ContactListItem.styled';

export function ContactListItem({ onContactInfo, onButtonDelite }) {
  return (
    <ContactItem>
      <Contact>
        {onContactInfo.name}: {onContactInfo.number}
      </Contact>
      <BtnDelite onClick={() => onButtonDelite(onContactInfo.id)}>
        Delete
      </BtnDelite>
    </ContactItem>
  );
}
ContactListItem.propTypes = {
  onContactInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  onButtonDelite: PropTypes.func.isRequired,
};
