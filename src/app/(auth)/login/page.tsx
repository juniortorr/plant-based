'use client';
import { FormEventHandler, useState } from 'react';
import { useFormState } from 'react-dom';
import { handleLogin } from '../../(actions)/actions';

export default function Login() {
  const [formState, formAction] = useFormState(handleLogin, null);

  return (
    <>
      <h1>Login Here</h1>
      <form action={formAction}>
        <label htmlFor="email">Username:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" />
        <button>submit</button>
        {formState && <p>{formState}</p>}
      </form>
    </>
  );
}
