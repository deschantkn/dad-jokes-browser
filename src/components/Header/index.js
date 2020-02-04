import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth.actions';

import './Header.scss';
import Dropdown from '../Dropdown';

function Header(props) {
  const { firebaseAuth: { isLoaded: profileIsLoaded, isEmpty: profileIsEmpty, photoURL }, onLogout, profile } = props;

  let dropdownListItems;
  let dropdownButton;
  if (profileIsLoaded && !profileIsEmpty) {
    // User is logged
    dropdownListItems = (
      <React.Fragment>
        <Link to="/jokes"><li>My Jokes</li></Link>
        <li onClick={() => onLogout()}><span>Logout</span></li>
      </React.Fragment>
    );

    if (photoURL) dropdownButton = <img className="img-thumbnail img-thumbnail-custom" src={photoURL} alt="Profile" />
    else dropdownButton = <i>{profile.initials}</i>;
  } else if (profileIsLoaded && profileIsEmpty) {
    // User is not logged in
    dropdownButton = <i className="fas fa-sign-in-alt" />;
    dropdownListItems = <Link to="/auth"><li>Login or Signup!</li></Link>;
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

const mapStateToProps = ({ firebase: { auth, profile } }) => ({ firebaseAuth: auth, profile });

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
