import React, { useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../config/firebaseConfig';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import './Auth.scss';
import Login from './Login';
import Signup from './Signup';

const Auth = (props) => {
  const { firebaseAuth, location: { state } } = props;

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSucess: () => <Redirect to="/create" />
    }
  };

  const [isLogin, toggleAuthForm] = useState(true);

  if (!firebaseAuth.isEmpty && state?.from ) {
    return <Redirect to={{
      pathname: `${state?.from}`,
      state: { from: false }
    }} />;
  } else if (!firebaseAuth.isEmpty) {
    return <Redirect to="/" />;
  }

  return (
    <main className="page__main">
      <h4>Create and share your puns</h4>

      { firebaseAuth.isEmpty && state?.from ?
        <div className="alert alert-primary info-alert" role="alert">
          Login or Signup so your can create your own puns!
        </div>
      : null }

      <ul className="nav auth-nav with-indicator">
        <li className={`nav-item ${isLogin ? '' : 'tab-active'}`}><button onClick={() => toggleAuthForm(false)} className="btn">Signup</button></li>
        <li className={`nav-item ${isLogin ? 'tab-active' : ''}`}><button onClick={() => toggleAuthForm(true)} className="btn">Login</button></li>
      </ul>

      { isLogin ? <Login /> : <Signup /> }

      <div className="line">
        <hr className="bar" />
        <span>OR</span>
        <hr className="bar" />
      </div>

      <div className="social-auth">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    </main>
  )
}

const mapStateToProps = ({ firebase: { auth } }) => ({ firebaseAuth: auth });

export default connect(mapStateToProps)(Auth);
