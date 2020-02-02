import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../config/firebaseConfig';

import './Auth.scss';

const Auth = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ]
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert('Login!');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert('Signup');
  };

  const loginForm = (
    <form onSubmit={handleLoginSubmit} className="manual-auth">
      <div className="form-group">
        <input
          id="loginEmail"
          type="email"
          className="form-control"
          aria-describedby="Enter your email address"
          placeholder="Enter email address"
          value={loginEmail}
          onChange={e => setLoginEmail(e.target.value)}
          required />
      </div>

      <div className="form-group">
        <input
          id="loginPassword"
          type="password"
          className="form-control"
          aria-describedby="passwordHelp"
          placeholder="Pick a password"
          value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)} 
          required />
      </div>
      <button type="submit" className="btn btn-custom">Login</button>
    </form>
  );

  const signupForm = (
    <form onSubmit={handleSignupSubmit} className="manual-auth">

      <div className="form-row">
        <div className="form-group col-md-6">
          <input 
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required />
        </div>
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required />
        </div>
      </div>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email address"
          value={signupEmail}
          onChange={e => setSignupEmail(e.target.value)}
          required />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          aria-describedby="passwordHelp"
          placeholder="Pick a password"
          value={signupPassword}
          onChange={e => setSignupPassword(e.target.value)}
          required />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="passwordConfirm"
          aria-describedby="passwordHelp"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          required />
      </div>

      <button type="submit" className="btn btn-custom">Signup</button>
    </form>
  );

  const [activeForm, setActiveForm] = useState(loginForm);
  const [isSignup, setIsSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

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
