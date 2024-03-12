'use client';
import { FormEventHandler, useState } from 'react';
import { useFormState } from 'react-dom';
import { handleLogin } from '../../actions';

export default function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  const [formState, formAction] = useFormState(handleLogin, null);

  return (
    <>
      <h1>Login Here</h1>
      <form action={formAction}>
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
        {formState && <p>{formState}</p>}
      </form>
    </>
  );
}
