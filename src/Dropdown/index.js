import React from 'react';
import './Dropdown.scss';

const Dropdown = (props) => {
  const { dropdownButton, dropdownContent } = props;

  return (
    <div className="dropdown profile-icon dropdown-bubble">
      <button className="btn" type="button" id="dropDownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {dropdownButton}
      </button>

      <div className="dropdown-menu dropdown-menu-right dropdown-custom" aria-labelledby="dropDownLink">
        {dropdownContent}
      </div>
    </div>
  )
}

export default Dropdown;
