'use client';
import { FormEventHandler, useState } from 'react';
import { useFormState } from 'react-dom';
import { signIn } from 'next-auth/react';

export default function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email: state.email,
      password: state.password,
      redirect: false,
    });
    console.log(res);
  };
  return (
    <>
      <h1>Login Here</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Username:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setState({ email: e.target.value, password: state.password });
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => {
            setState({ email: state.email, password: e.target.value });
          }}
        />
        <button>submit</button>
      </form>
    </>
  );
}
