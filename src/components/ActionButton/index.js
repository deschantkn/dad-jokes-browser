import React from 'react'

import './ActionButton.scss';

function ActionButton(props) {
  const { icon } = props;
  return (
    <button className="btn action-btn">
      {icon}
    </button>
  )
}

export default ActionButton;
