import React from 'react';
import './Dropdown.scss';

const Dropdown = (props) => {
  const { dropdownButton, dropdownContent, withBubble } = props;

  return (
    <div className={`dropdown dropdown-custom profile-icon ${withBubble ? 'dropdown-bubble' : ''}`}>
      <button className="btn" type="button" id="dropDownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {dropdownButton}
      </button>

      <div className="dropdown-menu dropdown-menu-right dropdown-menu-custom" aria-labelledby="dropDownLink">
        {dropdownContent}
      </div>
    </div>
  )
}

export default Dropdown;
