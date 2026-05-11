import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // optional for custom styles

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // connect to backend here
    console.log('Logging in with', email, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <img src="/logo.png" alt="FinScore Logo" width="50" />
          <h3 className="mt-2">FinScore</h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2 position-relative">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" style={{ cursor: 'pointer' }}>
              <i className="bi bi-eye"></i> {/* Bootstrap icon if used */}
            </span>
          </div>
          <div className="mb-3 text-end">
            <Link to="/forgot-password" className="text-decoration-none small">Forgot password?</Link>
          </div>
          <button type="submit" className="btn btn-primary w-100">Log In</button>
        </form>
        <div className="text-center mt-3">
          <span className="text-muted">Don't have an account? </span>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

