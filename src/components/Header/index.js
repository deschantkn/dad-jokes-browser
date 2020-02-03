import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth.actions';

import './Header.scss';
import Dropdown from '../Dropdown';

function Header(props) {
  const { firebaseAuth: { isLoaded: profileIsLoaded, isEmpty: profileIsEmpty }, onLogout } = props;

  let dropdownListItems;
  let dropdownButton;
  if (profileIsLoaded && !profileIsEmpty) {
    // User is logged
    dropdownListItems = (
      <React.Fragment>
        <li><Link to="/jokes">My Jokes</Link></li>
        <li><Link onClick={() => onLogout()}>Logout</Link></li>
      </React.Fragment>
    );
    dropdownButton = <i className="fas fa-user-circle" />;
  } else if (profileIsLoaded && profileIsEmpty) {
    // User is not logged in
    dropdownButton = <i class="fas fa-sign-in-alt" />;
    dropdownListItems = <li><Link to="/auth">Login or Signup</Link> to create and share your jokes!</li>;
  } else {
    // Profile is most likely loading
    dropdownButton = <i className="fas fa-circle-notch fa-spin" />;
    dropdownListItems = null;
  }

  return (
    <div className="page__header row justify-content-between">
      <a href="/">
        <h1>Dad Joke Browser</h1>
      </a>

      <Dropdown dropdownButton={dropdownButton} dropdownContent={dropdownListItems} withBubble={true} />
    </div>
  )
}

const mapStateToProps = ({ firebase: { auth } }) => ({ firebaseAuth: auth });

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
