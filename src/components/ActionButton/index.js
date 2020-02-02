import React from 'react'

import './ActionButton.scss';

function ActionButton(props) {
  const { icon, action, isDisabled } = props;
  return (
    <button className="btn action-btn" onClick={action} disabled={isDisabled}>
      {icon}
    </button>
  )
}

export default ActionButton;
