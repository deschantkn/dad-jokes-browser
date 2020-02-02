import React from 'react'

import './ActionButton.scss';

function ActionButton(props) {
  const { icon, action } = props;
  return (
    <button className="btn action-btn" onClick={action}>
      {icon}
    </button>
  )
}

export default ActionButton;
