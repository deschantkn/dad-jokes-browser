import React, { useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../config/firebaseConfig';

import './Auth.scss';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ]
};

function Auth() {
  const loginForm = (
    <form className="manual-auth">
      <div className="form-group">
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email address" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Pick a password" />
      </div>
      <button type="submit" class="btn btn-custom">Login</button>
    </form>
  );
  const signupForm = (
    <form className="manual-auth">
      <div className="form-group">
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email address" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Pick a password" />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" id="passwordConfirm" aria-describedby="passwordHelp" placeholder="Confirm password" />
      </div>
      <button type="submit" class="btn btn-custom">Signup</button>
    </form>
  );

  const [activeForm, setActiveForm] = useState(signupForm);
  const [isSignup, setIsSignup] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const handleFormChange = (form) => {
    switch (form) {
      case 'login':
        setActiveForm(loginForm);
        setIsLogin(true);
        setIsSignup(false);
        break;
      case 'signup':
        setActiveForm(signupForm)
        setIsSignup(true);
        setIsLogin(false);
        break;
      default:
    }
  };

  return (
    <main className="page__main">
      <h4>Create and share your puns</h4>

      <ul className="nav auth-nav with-indicator">
        <li className={`nav-item ${isSignup ? 'tab-active' : ''}`}><button onClick={() => handleFormChange('signup')} className="btn">Signup</button></li>
        <li className={`nav-item ${isLogin ? 'tab-active' : ''}`}><button onClick={() => handleFormChange('login')} className="btn">Login</button></li>
      </ul>

      {activeForm}

      <div class="line">
        <hr class="bar" />
        <span>OR</span>
        <hr class="bar" />
      </div>

      <div className="social-auth">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    </main>
  )
}

export default Auth;
