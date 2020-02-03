import React, { useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { login } from '../../store/actions/auth.actions';

function Login(props) {
  const { onLogin, loginError, history, firebaseAuth } = props;

  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  if (!firebaseAuth.isEmpty) history.push('/');

  return (
    <form onSubmit={handleSubmit} className="manual-auth">
      {
        loginError ? (
          <div className="alert alert-danger custom-alert" role="alert">
            {loginError.message}
          </div>
        ) : null
      }
      <div className="form-group">
        <input
          id="loginEmail"
          type="email"
          className="form-control"
          aria-describedby="Enter your email address"
          placeholder="Enter email address"
          value={email}
          onChange={e => setLoginEmail(e.target.value)}
          required />
      </div>

      <div className="form-group">
        <input
          id="loginPassword"
          type="password"
          className="form-control"
          aria-describedby="passwordHelp"
          placeholder="Enter your password"
          value={password}
          onChange={e => setLoginPassword(e.target.value)} 
          required />
      </div>
      <button type="submit" className="btn btn-custom">Login</button>
    </form>
  )
}

const mapStateToProps = ({ auth: { loginError }, firebase: { auth } }) => ({ loginError, firebaseAuth: auth });

const mapDispatchToProps = (dispatch) => ({
  onLogin: (credentials) => dispatch(login(credentials)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
