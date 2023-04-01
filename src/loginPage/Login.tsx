import React, { useState } from 'react';
import axios from 'axios'

interface LoginFormProps {
  onLogin: (page: string) => void;
}

const Login: React.FC<LoginFormProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(email)
    axios.post('http://localhost:8000/send-user', {
      email,
      password,
    })
    props.onLogin('locator')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;