import React, { useState } from 'react'

function Login() {
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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

export default Login;
