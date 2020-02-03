import React, { useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../config/firebaseConfig';

import './Auth.scss';
import Login from './Login';
import Signup from './Signup';

const Auth = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  const [isLogin, toggleAuthForm] = useState(true);

  return (
    <main className="page__main">
      <h4>Create and share your puns</h4>

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

export default Auth;
