import React, { useState } from 'react'

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login!');
  };

  return (
    <form onSubmit={handleSubmit} className="manual-auth">
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
  )
}

export default Login;
