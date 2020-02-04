import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../store/actions/auth.actions';

function Signup(props) {
  const { onSignup } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup({ firstName, lastName, email, password, passwordConfirm });
  };

  return (
    <form onSubmit={handleSubmit} className="manual-auth">
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
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          aria-describedby="passwordHelp"
          placeholder="Pick a password"
          value={password}
          onChange={e => setPassword(e.target.value)}
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
  )
}

const mapDispatchToProps = (dispatch) => ({
  onSignup: (newUser) => dispatch(signup(newUser))
});

export default connect(null, mapDispatchToProps)(Signup);
