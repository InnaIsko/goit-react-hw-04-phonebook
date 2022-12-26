import PropTypes from 'prop-types';

import { LabelFilter, InputFilter } from './Filter.styled';

export function Filter({ onFilterValue, onGetInputValue }) {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        value={onFilterValue}
        onChange={onGetInputValue}
      />
    </LabelFilter>
  );
}

Filter.propTypes = {
  onFilterValue: PropTypes.string.isRequired,
  onGetInputValue: PropTypes.func.isRequired,
};
