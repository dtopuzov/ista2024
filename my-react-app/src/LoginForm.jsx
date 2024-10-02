import { useState } from 'react'
import './LoginForm.css'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation for empty fields
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    setError('');
    // Handle login logic here (API call, etc.)
    console.log('Logged in with:', { email, password });
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        {error && <p className="error-message" data-testid="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-btn" data-testid="login-btn">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
