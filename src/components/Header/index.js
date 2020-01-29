import React from 'react'

import './Header.scss';
import Dropdown from '../Dropdown';

function Header() {
  // const dropdownListItems = (
  //   <React.Fragment>
  //     <li><a href="/jokes">My Jokes</a></li>
  //     <li><a href="/logout">Logout</a></li>
  //   </React.Fragment>
  // );
  const dropdownListItems = <li><a href="/auth">Signup</a> or <a href="/auth">Login</a> to create and share your jokes!</li>;

  // TODO: Replace with user profile picture if logged in
  const dropdownButton = <i className="far fa-user-circle"></i>;

  return (
    <div className="page__header row justify-content-between">
      <a href="/">
        <h1>Dad Joke Browser</h1>
      </a>

      <Dropdown dropdownButton={dropdownButton} dropdownContent={dropdownListItems} />
    </div>
  )
}

export default Header;
